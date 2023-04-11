// Modules
import React from "react";

// Components
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = ({ chartData, chartOptions }) => {
  if (!chartData) return null;

  return (
    <div className="chart-wrapper">
      <Pie className="chart" data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;
