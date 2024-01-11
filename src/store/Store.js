import { configureStore } from "@reduxjs/toolkit";
import UserAuth from "./slices/auth/UserAuth";
import TeacherClasses from "./slices/teacher/TeacherClasses";
import TeacherCreateClass from "./slices/teacher/TeacherCreateClass";
import TeacherSpecificClass from "./slices/teacher/TeacherSpecificClass";

export const Store = configureStore({
    reducer: {
        UserAuth: UserAuth.reducer,
        TeacherClasses: TeacherClasses.reducer,
        TeacherCreateClass: TeacherCreateClass.reducer,
        TeacherSpecificClass: TeacherSpecificClass.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
