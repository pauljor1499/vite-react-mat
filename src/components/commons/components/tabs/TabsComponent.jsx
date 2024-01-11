import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import { useState } from "react";

function TabPanel(props) {
    const { value, index, children, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ padding: "5% 0" }}>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    children: PropTypes.node,
};

export default function TabsComponent({ tabContents }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        tabContents && (
            <Box sx={{ width: "100%" }}>
                <Tabs value={value} onChange={handleChange}>
                    {tabContents.map((item, index) => (
                        <Tab key={index} value={index} label={item.label} />
                    ))}
                </Tabs>
                <Divider />
                {tabContents.map((item, index) => (
                    <TabPanel key={index} value={value} index={index}>
                        {item.component}
                    </TabPanel>
                ))}
            </Box>
        )
    );
}

// HOW TO USE
// import TabsComponent from "./TabsComponent";
// let data = [
//     {
//         label: "item one",
//         component: "",
//     },
// ];
// <TabsComponent tabContents={[{label: "item one", component: "",},]}/>
