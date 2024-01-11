/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
// import { columns, data, topToolbar, pinnedColumn } from "./GradebookData";

const PinnedTable = ({ columns, data, topToolbar, pinnedColumn, rowActions }) => {
    //should be memoized or stable
    // const columns = useMemo(() => columns, []);

    const table = useMaterialReactTable({
        renderTopToolbar: topToolbar,
        columns,
        data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        // toolbar
        // enableTopToolbar: false,
        // enableBottomToolbar: false,
        // enableGlobalFilter: true,
        layoutMode: "grid",
        initialState: { showGlobalFilter: true, columnPinning: pinnedColumn ? pinnedColumn : false },

        // actions
        enableRowActions: rowActions ? rowActions : false,
        positionActionsColumn: "first",
        renderRowActionMenuItems: rowActions,

        //pagination
        muiPaginationProps: {
            rowsPerPageOptions: [5, 10, 15],
            variant: "outlined",
            color: "primary",
            shape: "rounded",
        },
        paginationDisplayMode: "pages",
        positionToolbarAlertBanner: "bottom",
        muiSearchTextFieldProps: {
            size: "small",
            variant: "outlined",
        },

        //column settings
        enableColumnActions: false,
        enableSorting: false,

        //table settings
        enableFullScreenToggle: false,
        enableDensityToggle: false,
        enableHiding: false,
        enableColumnFilters: false,
        enableColumnPinning: false,
        enableGlobalFilter: true,
    });

    return (
        <div style={{ position: "relative" }}>
            <div style={{ width: "100%", position: "absolute" }}>
                <MaterialReactTable table={table} />
                <br />
                <br />
            </div>
        </div>
    );
};

export default PinnedTable;
