import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import teacherClassAPI from "../../../api/teacher/classAPI";

export const _fetchSpecificClass = createAsyncThunk("fetch/specificClass", async (classUUID) => {
    const response = await teacherClassAPI.prototype.fetchSpecificClass(classUUID);
    return response;
});

const TeacherSpecificClass = createSlice({
    name: "TeacherSpecificClass",
    initialState: {
        specificClassData: null,
        hasErrors: null,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(_fetchSpecificClass.pending, (state) => {
                state.specificClassData = null;
                state.hasErrors = null;
                state.isLoading = true;
            })
            .addCase(_fetchSpecificClass.fulfilled, (state, action) => {
                state.specificClassData = action.payload.data.Class;
                state.hasErrors = null;
                state.isLoading = false;
            })
            .addCase(_fetchSpecificClass.rejected, (state, action) => {
                state.specificClassData = null;
                state.hasErrors = action.error.message;
                state.isLoading = false;
            });
    },
});

export default TeacherSpecificClass;
