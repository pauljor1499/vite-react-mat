import React from "react";
import ReactApexChart from "react-apexcharts";

const AssignmentGraph = ({ data, xKey, yKey, title, xAxisLabel, yAxisLabel }) => {
    const options = {
        chart: {
            id: "line-chart",
            toolbar: {
                show: false,
                offsetX: 0,
                offsetY: 0,
                tools: {
                    download: true,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                },
            },
        },
        xaxis: {
            categories: data.map((item) => item[xKey]),
            title: {
                text: xAxisLabel,
            },
        },
        yaxis: {
            title: {
                text: yAxisLabel,
            },
        },
        title: {
            text: title,
            align: "center",
            style: {
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333",
            },
        },
    };
    const series = [
        {
            name: yKey,
            data: data.map((item) => item[yKey]),
        },
    ];
    return <ReactApexChart options={options} series={series} type="line" height={300} />;
};

export default AssignmentGraph;
