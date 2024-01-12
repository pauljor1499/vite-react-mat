import AssignmentGraph from "./AssignmentGraph";
import { Paper } from "@mui/material";

const Section2 = () => {
    const data = [
        { day: "ALgebra", value: 10 },
        { day: "Calculus", value: 20 },
        { day: "Polynomials", value: 15 },
        { day: "Trigonometry", value: 25 },
        { day: "Geometry", value: 18 },
    ];

    return (
        <Paper
            elevation={2}
            sx={{
                width: "100%",
                padding: "2%",
                backgroundColor: "#ffff",
            }}
        >
            <div style={{ width: "80%", margin: "auto" }}>
                <AssignmentGraph
                    data={data}
                    xKey="day"
                    yKey="value"
                    title="Assignment Submissions"
                    xAxisLabel="Subjects"
                    yAxisLabel="Submissions"
                />
            </div>
        </Paper>
    );
};

export default Section2;
