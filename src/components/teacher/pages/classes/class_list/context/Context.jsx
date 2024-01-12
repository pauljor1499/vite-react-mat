import React from "react";

export const ClassesPageContext = React.createContext({ 
    schedState: [],
    addSchedItem: () => {}, 
    removeSchedItem: () => {}, 
    resetSchedItems: () => {}
});

export const useSchedContext = () => {
    const schedContext = React.useContext(ClassesPageContext);

    if (schedContext === undefined) {
        throw new Error("useSchedContext must be used within a ClassesPageContext");
    }

    return schedContext;
}