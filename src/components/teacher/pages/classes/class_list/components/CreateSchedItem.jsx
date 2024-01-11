import React, { useState } from "react";
import { Box, Button, useTheme, Grid, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useFormik } from "formik";
import * as yup from "yup";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";

import { useSnackbar } from "notistack";

import Fade from "@mui/material/Fade";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import dayjs from "dayjs";
import { addSchedItem } from "../../../../../../store/slices/teacher/TeacherCreateClass";

import hasConflictingSchedules from "../../../../../../hooks/scheduleChecker";

const isTimeRangeWithin = (time_start, time_end) => {
  const format = "hh:mm A";

  const range1Start = dayjs(time_start, format);
  const range1End = dayjs(time_end, format);
  const range2Start = dayjs("07:00 AM", format);
  const range2End = dayjs("06:00 PM", format);

  return (
    range1Start.isSameOrAfter(range2Start) &&
    range1End.isSameOrBefore(range2End)
  );
};

const isTimeRangeValid = (start, end, format = "hh:mm A") => {
  const startTime = dayjs(start, format);
  const endTime = dayjs(end, format);

  return startTime.isBefore(endTime) && start !== end;
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});

const CreateSchedItem = React.forwardRef((props, ref) => {
  var isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
  dayjs.extend(isSameOrAfter);
  var isBetween = require("dayjs/plugin/isBetween");
  dayjs.extend(isBetween);
  var isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
  dayjs.extend(isSameOrBefore);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const { handleCloseSched } = props;
  const { enqueueSnackbar } = useSnackbar();

  const { schedules } = useSelector((state) => state.TeacherCreateClass);

  const [isNotWithinWorkingHours, setIsNotWithinWorkingHours] = useState(false);

  const addSchedFormik = useFormik({
    initialValues: {
      day: "",
      time_start: dayjs().format("hh:mm A"),
      time_end: dayjs().format("hh:mm A"),
    },
    validationSchema: yup.object({
      day: yup.string().required("Please specify a day"),
      time_start: yup
        .string()
        .required("Starting time shouldn't be empty")
        .test("is-time", "Starting time is required", (value) =>
          dayjs(value).isValid()
        )
        .test("is-after-end", "Starting time is invalid", function (value) {
          const { time_start } = this.parent;
          return !dayjs(value).isAfter(dayjs(time_start));
        }),
      time_end: yup
        .string()
        .required("Ending time shouldn't be empty")
        .test("is-time", "Ending time is required", (value) =>
          dayjs(value).isValid()
        )
        .test("is-before-start", "Ending time is invalid", function (value) {
          const { time_start } = this.parent;
          return !dayjs(value).isBefore(dayjs(time_start));
        }),
    }),
    onSubmit: async (values) => {
      values.time_start = dayjs(values.time_start).format("hh:mm A");
      values.time_end = dayjs(values.time_end).format("hh:mm A");
      if (!isTimeRangeValid(values.time_start, values.time_end)) {
        enqueueSnackbar(
          "This schedule is invalid. Please check the time slots.",
          { variant: "error" }
        );
      } else if (
        schedules.length > 0 && schedules !== null &&
        hasConflictingSchedules(schedules, values)
      ) {
        enqueueSnackbar(
          "This schedule is invalid. Please check the time slots.",
          { variant: "error" }
        );
      } else {
        dispatch(addSchedItem(values));
        handleCloseSched();
      }
    },
  });

  const handleCloseWorkingHours = () => {
    setIsNotWithinWorkingHours(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
        maxHeight: 250,
      }}
    >
      <DemoContainer components={["TimePicker"]}>
        <Grid container spacing={1} columns={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              m: 1,
            }}
          >
            <FormControl
              sx={{ mr: 1, width: !isMobile ? 180 : 70 }}
              size="standard"
              error={
                addSchedFormik.touched.day && Boolean(addSchedFormik.errors.day)
              }
            >
              <InputLabel id="select-day">Day</InputLabel>
              <Select
                labelId="select-day"
                id="sched-day"
                label="Day"
                name="day"
                onChange={addSchedFormik.handleChange}
                value={addSchedFormik.values.day}
                onBlur={addSchedFormik.handleBlur}
              >
                <MenuItem value={"Sunday"}>Sunday</MenuItem>
                <MenuItem value={"Monday"}>Monday</MenuItem>
                <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
                <MenuItem value={"Thursday"}>Thursday</MenuItem>
                <MenuItem value={"Friday"}>Friday</MenuItem>
                <MenuItem value={"Saturday"}>Saturday</MenuItem>
              </Select>
              <FormHelperText>
                {addSchedFormik.touched.day && addSchedFormik.errors.day}
              </FormHelperText>
            </FormControl>
            <TimePicker
              size="small"
              label="Time Start"
              name="timeStart"
              value={addSchedFormik.values.time_start}
              onChange={(value) => {
                addSchedFormik.setFieldValue("time_start", value);
              }}
              onBlur={addSchedFormik.handleBlur}
              sx={{
                mr: 1,
                maxWidth: 150,
              }}
              slotProps={{
                textField: {
                  error:
                    addSchedFormik.touched.time_start &&
                    Boolean(addSchedFormik.errors.time_start),
                  helperText:
                    addSchedFormik.touched.time_start &&
                    addSchedFormik.errors.time_start,
                },
              }}
            />
            <TimePicker
              size="small"
              label="Time End"
              name="timeEnd"
              value={addSchedFormik.values.time_end}
              onBlur={addSchedFormik.handleBlur}
              onChange={(value) => {
                addSchedFormik.setFieldValue("time_end", value);
              }}
              sx={{
                mr: 1,
                maxWidth: 150,
              }}
              slotProps={{
                textField: {
                  error:
                    addSchedFormik.touched.time_end &&
                    Boolean(addSchedFormik.errors.time_end),
                  helperText:
                    addSchedFormik.touched.time_end &&
                    addSchedFormik.errors.time_end,
                },
              }}
            />
          </Box>
          <Grid item lg={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                my: 1,
                mx: 1,
              }}
            >
              <Button
                onClick={() => {
                  if (
                    !isTimeRangeValid(
                      addSchedFormik.values.time_start,
                      addSchedFormik.values.time_end
                    )
                  ) {
                    addSchedFormik.handleSubmit();
                  } else if (
                    !isTimeRangeWithin(
                      addSchedFormik.values.time_start,
                      addSchedFormik.values.time_end
                    )
                  ) {
                    setIsNotWithinWorkingHours(true);
                  } else {
                    addSchedFormik.handleSubmit();
                  }
                }}
                sx={{ ml: 1 }}
                variant="outlined"
              >
                Add
              </Button>
              <Button
                onClick={handleCloseSched}
                variant="outlined"
                color="error"
              >
                Discard
              </Button>
            </Box>
            <Dialog
              open={isNotWithinWorkingHours}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleCloseWorkingHours}
              aria-describedby="alert-dialog-slide-description"
              maxWidth="xs"
            >
              <DialogTitle>{"Are you sure?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Your chosen class time is not during office hours which is
                  7:00 am to 6:00 pm. Do you want to continue?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="error" onClick={handleCloseWorkingHours}>
                  No
                </Button>
                <Button onClick={addSchedFormik.handleSubmit}>Yes</Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </DemoContainer>
    </Box>
  );
});

export default CreateSchedItem;
