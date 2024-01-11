import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  section: "",
  schedules: [],
};

const TeacherCreateClass = createSlice({
  name: "teacherCreateClass",
  initialState,
  reducers: {
    addSchedItem: (state, action) => {
      state.schedules.push(action.payload);
    },
    deleteSchedItem: (state, action) => {
      state.schedules.splice(action.payload, 1);
    },
    reset: (state) => {
      return initialState;
    },
  },
});

export const { addSchedItem, deleteSchedItem, reset } =
  TeacherCreateClass.actions;

export default TeacherCreateClass;
