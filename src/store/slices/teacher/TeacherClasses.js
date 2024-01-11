import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import teacherClassAPI from "../../../api/teacher/classAPI";

export const _fetchAllClasses = createAsyncThunk("fetch/allClasses", async () => {
    const response = await teacherClassAPI.prototype.fetchAllClasses();
    return response;
});

export const _createNewClass = createAsyncThunk("create/newClass", async (payload) => {
    const response = await teacherClassAPI.prototype.createNewClass(payload);
    return response;
});

export const _deleteClass = createAsyncThunk("delete/Class", async (classUUID) => {
    const response = await teacherClassAPI.prototype.deleteClass(classUUID);
    return response;
});

export const _updateClass = createAsyncThunk("update/Class", async (payload) => {
    const response = await teacherClassAPI.prototype.updateClass(payload.classUUID, payload.classDetails);
    return response;
});

const TeacherClasses = createSlice({
    name: "TeacherClasses",
    initialState: {
        classData: null,
        hasErrors: null,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(_fetchAllClasses.pending, (state) => {
                state.classData = null;
                state.hasErrors = null;
                state.isLoading = true;
            })
            .addCase(_fetchAllClasses.fulfilled, (state, action) => {
                state.classData = JSON.parse(
                    JSON.stringify(
                        action.payload.data.data.sort((a, b) => {
                            return a.title.localeCompare(b.title);
                        })
                    )
                );
                state.hasErrors = null;
                state.isLoading = false;
            })
            .addCase(_fetchAllClasses.rejected, (state, action) => {
                state.classData = null;
                state.hasErrors = action.error.message;
                state.isLoading = false;
            })

            //create new class
            .addCase(_createNewClass.pending, (state) => {
                state.hasErrors = null;
                state.isLoading = true;
            })
            .addCase(_createNewClass.fulfilled, (state, action) => {
                state.classData.push(JSON.parse(JSON.stringify(action.payload.data.new_class)));
                state.hasErrors = null;
                state.isLoading = false;
            })
            .addCase(_createNewClass.rejected, (state, action) => {
                state.hasErrors = action.error.message;
                state.isLoading = false;
            })

            //delete class
            .addCase(_deleteClass.pending, (state) => {
                state.hasErrors = null;
                state.isLoading = true;
            })
            .addCase(_deleteClass.fulfilled, (state, action) => {
                const objWithIdIndex = state.classData.findIndex((obj) => obj.uuid === action.payload);
                state.classData.splice(objWithIdIndex, 1);
                state.hasErrors = null;
                state.isLoading = false;
            })
            .addCase(_deleteClass.rejected, (state, action) => {
                state.hasErrors = action.error.message;
                state.isLoading = false;
            })

            // update class
            .addCase(_updateClass.pending, (state) => {
                state.hasErrors = null;
                state.isLoading = true;
            })
            .addCase(_updateClass.fulfilled, (state, action) => {
                const objWithIdIndex = state.classData.findIndex((obj) => obj.uuid === action.payload.classUUID);
                state.classData.splice(objWithIdIndex, 1, action.payload.data.Class);
                state.hasErrors = null;
                state.isLoading = false;
            })
            .addCase(_updateClass.rejected, (state, action) => {
                state.hasErrors = action.error.message;
                state.isLoading = false;
            });
    },
});

export default TeacherClasses;
