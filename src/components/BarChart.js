// Modules
import React from "react";

// Components
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ chartData, chartOptions }) => {
  if (!chartData) return null;

  return (
    <div className="chart-wrapper">
      <Bar className="chart" data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
