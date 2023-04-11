// Modules
import React from "react";

// Hooks
import { useState, useEffect } from "react";

// Components
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

// Data
import { UserData } from "./Data";

// Style
import "./App.css";

const App = () => {
  const [plotType, setPlotType] = useState("userGain");
  const [userChartData, setUserChartData] = useState(null);
  const [userChartOptions, setUserChartOptions] = useState({
    plugins: {
      legend: {
        position: "bottom",
        labels: { font: { size: 20 }, color: "rgba(0, 0, 0,.7)" },
      },
    },
  });

  useEffect(() => {
    setUserChartData({
      labels: UserData.map((data) => data.year),
      datasets: [
        {
          label: plotType == "userGain" ? "Users Gained" : "Users Lost",
          backgroundColor: [
            "rgba(75, 192, 192, 1)",
            "#ecf0f1",
            "#50af95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
          data: UserData.map((data) => data[plotType]),
        },
      ],
    });
  }, [plotType]);

  return (
    <div className="container">
      <div className="btn-group">
        <button
          className={`btn ${plotType == "userGain" && "btn--active"}`}
          onClick={setPlotType.bind(null, "userGain")}
        >
          User Gain
        </button>
        <button
          className={`btn ${plotType == "userLost" && "btn--active"}`}
          onClick={setPlotType.bind(null, "userLost")}
        >
          User Lost
        </button>
      </div>

      <div className="charts">
        <BarChart chartData={userChartData} chartOptions={userChartOptions} />
        <LineChart chartData={userChartData} chartOptions={userChartOptions} />
        <PieChart chartData={userChartData} chartOptions={userChartOptions} />
      </div>
    </div>
  );
};

export default App;
