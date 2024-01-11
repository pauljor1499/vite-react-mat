import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StudentClassAPI from "../../../api/student/classAPI";

export const _fetchAllClasses = createAsyncThunk("fetch/allClasses", async () => {
    const response = await StudentClassAPI.prototype.fetchAllClasses();
    return response;
});

const StudentClasses = createSlice({
    name: "StudentClasses",
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
            });
    },
});

export default StudentClasses;
