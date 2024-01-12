import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import List from "@mui/material/List";
import LoadingButton from "@mui/lab/LoadingButton";

// Animations
import { TransitionGroup } from "react-transition-group";
import Collapse from "@mui/material/Collapse";

import { useSnackbar } from "notistack";

import CreateSchedItem from "./CreateSchedItem";
import CreatedSchedItem from "./CreatedSchedItem";
import { reset } from "../../../../../../store/slices/teacher/TeacherCreateClass";
import { _createNewClass } from "../../../../../../store/slices/teacher/TeacherClasses";
import { _fetchSpecificClass } from "../../../../../../store/slices/teacher/TeacherSpecificClass";

import dayjs from "dayjs";
import { useSchedContext } from "../context/Context";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  overflow: "auto",
  maxHeight: "95%",
};

const CreateNewClass = React.forwardRef((props, ref) => {
  var isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
  dayjs.extend(isSameOrAfter);
  var isBetween = require("dayjs/plugin/isBetween");
  dayjs.extend(isBetween);
  var isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
  dayjs.extend(isSameOrBefore);

  function doSchedulesConflict(schedule, newSchedule) {
    const day1 = schedule.day;
    const start1 = dayjs(schedule.time_start, "hh:mm A");
    const end1 = dayjs(schedule.time_end, "hh:mm A");

    const day2 = newSchedule.day;
    const start2 = dayjs(newSchedule.time_start, "hh:mm A");
    const end2 = dayjs(newSchedule.time_end, "hh:mm A");

    // Check for conflicts in terms of day and time
    const isDayConflict = day1 === day2;
    const isTimeConflict =
      (start1.isBefore(end2) && end1.isAfter(start2)) ||
      (start2.isBefore(end1) && end2.isAfter(start1));

    return isDayConflict && isTimeConflict;
  }

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  
  const { close } = props;
  const { enqueueSnackbar } = useSnackbar();

  const [creatingSched, setCreatingSched] = React.useState(false);
  const [semester, setSemester] = React.useState("");
  const [conflictingSchedules, setConflictingSchedules] = useState([]);

  const handleShowSched = () => setCreatingSched(true);
  const handleCloseSched = () => setCreatingSched(false);

  // SchedItem State accessors --------------------------------
  const dispatch = useDispatch();
  const newClass = useSelector((state) => state.TeacherCreateClass);
  const {schedState, resetSchedItems} = useSchedContext();
  const { classData } = useSelector((state) => state.TeacherClasses);

  const checkClassDuplicated = async (section) => {
    // fetch every class id with the same section
    const classesWithSameSections = classData
      .filter((classItem) => classItem.section === section)
      .map((classItem) => classItem.uuid);
  
    if (schedState !== null && classesWithSameSections.length > 0) {
      const conflicts = [];
  
      for (const uuid of classesWithSameSections) {
        try {
          // Dispatch and wait for the specific class data to be loaded
          const res = await dispatch(_fetchSpecificClass(uuid));
  
          // Ensure schedules is not null and get schedules
          const schedules = res.payload.data.Class?.schedules;
  
          if (schedules !== null) {
            // Use forEach to iterate over newClass.schedules
            newClass.schedules.forEach((newSched) => {
              const hasConflict = schedules.some((schedule) =>
                doSchedulesConflict(schedule, newSched)
              );
  
              if (hasConflict) {
                conflicts.push({ ...newSched });
              }
            });
          }
        } catch (error) {
          // console.error("Error fetching specific class data:", error);
          // Handle errors accordingly
        }
      }
  
      // this is useful in showing conflicting schedule item in UI
      setConflictingSchedules(conflicts);
  
      // Return true if there are conflicting schedules, otherwise false
      return conflicts.length > 0;
    }
  
    // Return false if conditions are not met
    return false;
  };

  // returns a boolean where this sched item is invalid and helps to conditionally render a red border
  function isScheduleItemInvalid(scheduleItem) {
    return conflictingSchedules.some((conflictingSchedule) =>
      doSchedulesConflict(conflictingSchedule, scheduleItem)
    );
  }

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    setCreatingSched(false);
  }, [close]);

  if (isMobile) {
    style.width = "55%";
  } else {
    style.width = "45%";
  }

  const addNewClassFormik = useFormik({
    initialValues: {
      title: "",
      description: "",
      section: "",
      schedules: [],
      students: [],
    },
    validationSchema: yup.object({
      title: yup
        .string()
        .min(2, "Title is too short")
        .max(25, "Maximum amount of characters reached")
        .required("Title should not be empty"),
      description: yup
        .string()
        .max(60, "Maximum amount of characters reached")
        .required("Description should not be empty"),
      section: yup
        .string()
        .max(25, "Maximum amount of characters reached")
        .required("This field should not be empty"),
      schedules: yup.array().min(1, "Must have at least 1 schedule"),
    }),
    onSubmit: async (values) => {
      setSubmitLoading(true);

      if (values.schedules.length === 0) {
        enqueueSnackbar("Must have at least 1 schedule", { variant: "error" });
        setSubmitLoading(false);
      } else {
        checkClassDuplicated(values.section)
          .then((hasConflicts) => {
            if (hasConflicts) {
              enqueueSnackbar(
                "Invalid class to create. This class already exists.",
                { variant: "error" }
              );
            } else {
              // Your success logic here
              dispatch(_createNewClass(values)).then((response) => {
                    if (response.payload) {
                      enqueueSnackbar("Successfully added a class", {
                        variant: "success",
                      });
                    }
                  });
                  addNewClassFormik.resetForm();
                  resetSchedItems();
                  close();
                  enqueueSnackbar("Successfully added a class", {
                    variant: "success",
                  });
            }
          })
          .catch((error) => {
            // console.error("Error checking for conflicts:", error);
            // Handle errors accordingly
          })
          .finally(() => {
            setSubmitLoading(false);
          });
      }
    },
  });

  useEffect(() => {
    addNewClassFormik.values.schedules = schedState;
  }, [newClass.schedules, addNewClassFormik.values]);

  return (
    <>
      <Box sx={style} ref={ref}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <form onSubmit={addNewClassFormik.handleSubmit}>
            <Box
              sx={{
                width: 1,
                px: 2,
                py: 1,
              }}
              bgcolor="primary.main"
            >
              <Typography
                variant="h6"
                sx={{
                  display: { fontWeight: 300, letterSpacing: "-0.5px" },
                }}
                color="white"
              >
                Create New Class
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <TextField
                  label="Title"
                  name="title"
                  sx={{ width: "50%", my: 1 }}
                  size="small"
                  value={addNewClassFormik.values.title}
                  onChange={addNewClassFormik.handleChange}
                  onBlur={addNewClassFormik.handleBlur}
                  error={
                    addNewClassFormik.touched.title &&
                    Boolean(addNewClassFormik.errors.title)
                  }
                  helperText={
                    addNewClassFormik.touched.title &&
                    addNewClassFormik.errors.title
                  }
                />
                <FormControl
                  size="small"
                  sx={{
                    minWidth: "41%",
                    my: 1,
                    ml: 3,
                  }}
                >
                  <InputLabel id="class-semester-label">Semester</InputLabel>
                  <Select
                    labelId="class-semester-label"
                    id="class-semester"
                    value={semester}
                    label="Semester"
                    onChange={handleSemesterChange}
                  >
                    <MenuItem key={0} value={10}>
                      Fall
                    </MenuItem>
                    <MenuItem key={1} value={20}>
                      Summer 1
                    </MenuItem>
                    <MenuItem key={2} value={20}>
                      Summer 2
                    </MenuItem>
                    <MenuItem key={3} value={30}>
                      Winter
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <TextField
                label="Description"
                name="description"
                sx={{ width: "50%", my: 1 }}
                size="small"
                value={addNewClassFormik.values.description}
                onChange={addNewClassFormik.handleChange}
                onBlur={addNewClassFormik.handleBlur}
                error={
                  addNewClassFormik.touched.description &&
                  Boolean(addNewClassFormik.errors.description)
                }
                helperText={
                  addNewClassFormik.touched.description &&
                  addNewClassFormik.errors.description
                }
              />
              <TextField
                label="Section/Period/Block"
                name="section"
                sx={{ width: "50%", mt: 1 }}
                size="small"
                value={addNewClassFormik.values.section}
                onChange={addNewClassFormik.handleChange}
                onBlur={addNewClassFormik.handleBlur}
                error={
                  addNewClassFormik.touched.section &&
                  Boolean(addNewClassFormik.errors.section)
                }
                helperText={
                  addNewClassFormik.touched.section &&
                  addNewClassFormik.errors.section
                }
              />
              <Collapse
                in={Boolean(
                  addNewClassFormik.touched.schedules &&
                    addNewClassFormik.errors.schedules
                )}
                unmountOnExit
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    width: "100%",
                    mt: 1,
                    pl: 2,
                    py: 1,
                    borderRadius: 2,
                    height: "auto",
                    bgcolor: "primary.light",
                  }}
                >
                  <Typography color="error.main" fontSize="small">
                    {addNewClassFormik.errors.schedules}
                  </Typography>
                </Box>
              </Collapse>
              <List>
                <TransitionGroup>
                  {schedState.map((item, index) => (
                    <Collapse key={index}>
                      <CreatedSchedItem
                        key={index}
                        props={{
                          index: index,
                          day: item.day,
                          timeStart: item.time_start,
                          timeEnd: item.time_end,
                          isInvalid: isScheduleItemInvalid(item),
                        }}
                      />
                    </Collapse>
                  ))}
                </TransitionGroup>
              </List>
              <Collapse in={!creatingSched} unmountOnExit>
                <Button
                  sx={{ width: 170, boxShadow: 0 }}
                  variant="contained"
                  size="medium"
                  onClick={handleShowSched}
                >
                  Add New Schedule
                </Button>
              </Collapse>
              <Collapse in={creatingSched} unmountOnExit>
                <div>
                  <CreateSchedItem handleCloseSched={handleCloseSched} />
                </div>
              </Collapse>

              <Box
                sx={{ display: "flex", flexDirection: "row-reverse", mt: 3 }}
              >
                <LoadingButton
                  loading={submitLoading}
                  type="submit"
                  sx={{ ml: 1 }}
                  variant="contained"
                >
                  Create
                </LoadingButton>
                <Button
                  onClick={() => {
                    dispatch(reset());
                    close();
                  }}
                  variant="outlined"
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
});

export default CreateNewClass;
