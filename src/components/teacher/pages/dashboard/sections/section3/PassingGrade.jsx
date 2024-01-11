import React from "react";
import ReactApexChart from "react-apexcharts";

const PassingGrade = ({ passingRate, failingRate }) => {
    const options = {
        labels: ["Passing Rate", "Failing Rate"],
        title: {
            text: "Passing vs Failing Rates",
            align: "center",
            style: {
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333",
            },
        },
    };
    const series = [passingRate, failingRate];
    return <ReactApexChart options={options} series={series} type="pie" width="350" />;
};

export default PassingGrade;
