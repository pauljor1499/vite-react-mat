import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SearchQuestions from "./search_questions/SearchQuestions";
import SelectedQuestions from "./selected_questions/SelectedQuestions";
import { Button, Card, CardContent, Divider } from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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

const tabContents = [
    {
        label: "Search Questions",
        component: <SearchQuestions />,
    },
    {
        label: "Selected Questions",
        component: <SelectedQuestions />,
    },
];

export default function TabsComponent({ stepController, handleBack }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const clickNextStep = () => {
        stepController(2, "Step 2");
    };

    return (
        tabContents && (
            <Box
                sx={{
                    mt: 5,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "2%",
                }}
            >
                <Button sx={{ mt: 5, height: 40 }} variant="contained" color="inherit" onClick={handleBack}>
                    <ArrowBackIosIcon />
                </Button>
                <Card sx={{ width: "100%" }}>
                    <CardContent>
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
                    </CardContent>
                </Card>
                <Button sx={{ mt: 5, height: 40 }} variant="contained" onClick={clickNextStep}>
                    <ArrowForwardIosIcon />
                </Button>
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
