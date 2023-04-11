// Modules
import React from "react";

// Components
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";

const LineChart = ({ chartData, chartOptions }) => {
  if (!chartData) return null;

  return (
    <div className="chart-wrapper">
      <Line className="chart" data={chartData} options={chartOptions} />;
    </div>
  );
};

export default LineChart;
