/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Box,
  Alert,
  AlertTitle,
  Button,
  Grid,
  TextField,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  DialogContent,
} from "@mui/material";

import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import useAppBarHeight from "../../../../../hooks/useAppBarHeight";
import ClassCard from "./components/ClassCard";
import CreateNewClass from "./components/CreateNewClass";
import { _fetchAllClasses } from "../../../../../store/slices/teacher/TeacherClasses";
import BreadcrumbsComponent from "../../../../commons/components/breadcrumbs/Breadcrumbs";
import InputAdornment from "@mui/material/InputAdornment";
import { SnackbarProvider } from "notistack";

import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

import Fade from "@mui/material/Fade";
import Collapse from "@mui/material/Collapse";
import Backdrop from "@mui/material/Backdrop";

import no_class from "../../../../../assets/class/no_class.jpg";
import no_results from "../../../../../assets/class/no_results.jpg";
import SimpleLoading from "../../../../commons/components/loading/SimpleLoading";
import getCurrentSemester from "../../../../../hooks/getCurrentSemester";

import { ClassesPageContext } from "./context/Context";

// -------------------------------- INNER COMPONENTS / HOOKS --------------------------------

const filteredList = (classes, searchInput) => {
  if (searchInput === "" || searchInput === null) {
    return classes;
  }
  return classes.filter((classObj) => {
    return (
      classObj.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      classObj.code.toLowerCase().includes(searchInput.toLowerCase())
    );
  });
};

const renderClasses = (classData, searchInput) => {
  if (classData !== null) {
    if (
      filteredList(classData, searchInput).length === 0 &&
      searchInput !== ""
    ) {
      return (
        <Fade in={searchInput !== ""}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <img
                height={250}
                width="auto"
                src={no_results}
                alt={no_results}
              />
            </Grid>
            <Grid item>
              <Typography sx={{ mx: "auto" }} variant="h6">
                No results found
              </Typography>
            </Grid>
          </Grid>
        </Fade>
      );
    } else if (classData.length > 0 && searchInput === "") {
      return classData.map((entry, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
          <ClassCard teacherClass={entry} />
        </Grid>
      ));
    } else if (filteredList(classData, searchInput).length > 0) {
      return filteredList(classData, searchInput).map((entry, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
          <ClassCard teacherClass={entry} />
        </Grid>
      ));
    } else {
      return (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <img height={250} width="auto" src={no_class} alt={no_class} />
          </Grid>
          <Grid item>
            <Typography sx={{ mx: "auto" }} variant="h6">
              Create a class to get started
            </Typography>
          </Grid>
        </Grid>
      );
    }
  } else {
    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <img height={250} width="auto" src={no_class} alt={no_class} />
        </Grid>
        <Grid item>
          <Typography sx={{ mx: "auto" }} variant="h6">
            Create a class to get started
          </Typography>
        </Grid>
      </Grid>
    );
  }
};

// -------------------------------- MAIN COMPONENT CODE --------------------------------
const ClassesPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const below850 = useMediaQuery("(max-width:849px)");

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  //teacher all class
  const { classData, isLoading, hasErrors } = useSelector(
    (state) => state.TeacherClasses
  );

  useEffect(() => {
    if (classData === null) {
      dispatch(_fetchAllClasses());
    }
  }, [classData]);

  // Context values for child components

  const [schedState, setSchedState] = React.useState([]);

  const addSchedItem = (schedule) => {
    setSchedState([...schedState, schedule]);
  }
  const removeSchedItem = (index) => {
    setSchedState(schedState.filter((_, i) => i !== index));
  }
  const resetSchedItems = () => {
    setSchedState([]);
  }

  // ----------------- COMPONENT --------------------------------
  return (
    <ClassesPageContext.Provider value={{ schedState, addSchedItem, removeSchedItem, resetSchedItems }}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        maxSnack={3}
      >
        <SimpleLoading showLoading={isLoading} />
        <Box>
          <AppBar position="relative" color="primary">
            <Toolbar>
              <Typography variant="h6">{getCurrentSemester()}</Typography>
            </Toolbar>
          </AppBar>
          <BreadcrumbsComponent />
          <Collapse in={Boolean(hasErrors)}>
            <Alert sx={{ borderRadius: 0 }} severity="error">
              <AlertTitle>Error</AlertTitle>
              {hasErrors}
            </Alert>
          </Collapse>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "15px",
              p: "10px",
              marginTop: `${useAppBarHeight() - 16}px`,
              marginRight: "60px",
            }}
            bgcolor="primary.default"
          >
            <Grid
              sx={{
                marginLeft: "30px",
              }}
              container
              columns={16}
              direction="row"
              justifyContent="space-between"
            >
              <Grid item>
                <TextField
                  sx={{ minWidth: !below850 ? 350 : 100, height: 100 }}
                  id="searchInputField"
                  label="Search class..."
                  variant="outlined"
                  size="small"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle clear search text"
                          onClick={() => {
                            setSearchInput("");
                          }}
                          edge="end"
                          disableRipple
                        >
                          <Fade in={searchInput !== ""}>
                            <ClearIcon sx={{ color: "text.primary" }} />
                          </Fade>
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  onClick={handleOpen}
                  size="standard"
                  disabled={classData != null ? classData.length >= 8 : true}
                >
                  Create New Class
                </Button>
                <Modal
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  aria-labelledby="keep-mounted-modal-title"
                  aria-describedby="keep-mounted-modal-description"
                  slots={{ backdrop: Backdrop }}
                  slotProps={{
                    backdrop: {
                      timeout: 500,
                    },
                  }}
                >
                  <Fade in={open}>
                    <DialogContent>
                      <CreateNewClass close={handleClose} />
                    </DialogContent>
                  </Fade>
                </Modal>
              </Grid>
            </Grid>
            <Grid
              sx={{
                marginLeft: "5px",
                mt: 1,
              }}
              container
              spacing={3}
              justifyContent="flex-start"
              alignItems="center"
            >
              {renderClasses(classData, searchInput)}
            </Grid>
          </Box>
        </Box>
      </SnackbarProvider>
    </ClassesPageContext.Provider>
  );
};

export default ClassesPage;
