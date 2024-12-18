// src/components/AnalyticsGraph.js
import React, { useState } from "react";
import { Paper, Box, Select, MenuItem, FormControl, InputLabel, Typography } from "@mui/material";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const AnalyticsGraph = () => {
  const timePeriods = ["Monthly", "Quarterly", "Yearly"];
  
  const [selectedPeriod, setSelectedPeriod] = useState("Monthly");

  const chartData = {
    Monthly: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], 
      datasets: [
        {
          label: "Revenue Growth",
          data: [2000, 3000, 2500, 2500, 2500, 3500, 3600], 
          backgroundColor: "#7295FF", 
          borderWidth: 2,
          barPercentage: 0.8,
          categoryPercentage: 1.0,
          base: 0,
        },
      ],
    },
    Quarterly: {
      labels: ["Q1", "Q2", "Q3", "Q4"], 
      datasets: [
        {
          label: "Revenue Growth",
          data: [5000, 12000, 15000, 17000], 
          backgroundColor: "#7295FF", 
          borderWidth: 2,
          barPercentage: 0.8,
          categoryPercentage: 1.0,
          base: 0,
        },
      ],
    },
    Yearly: {
      labels: ["2020","2021", "2022", "2023","2024"], 
      datasets: [
        {
          label: "Revenue Growth",
          data: [20000, 30000, 40000, 30000, 20000], 
          backgroundColor: "#7295FF", 
          borderWidth: 2,
          barPercentage: 0.8,
          categoryPercentage: 1.0,
          base: 0,
        },
      ],
    },
  };

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: "#fff", 
        },
        grid: {
          color: "#20202A", 
        },
      },
      y: {
        ticks: {
          color: "#fff", 
        },
        grid: {
          color: "gray", 
        },
      },
    },
  };

  return (
    <Paper
      sx={{
        padding: 3,
        backgroundColor: "#20202A",
        color: "white",
        minHeight: "200px",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
      <Typography variant="h4" sx={{textAlign: "start"}}>Analytics</Typography>
        <FormControl sx={{ width: 140 }}>
          <InputLabel id="time-period-select-label" sx={{color: "white"}}>Time Period</InputLabel>
          <Select
            labelId="time-period-select-label"
            id="time-period-select"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            label="Time Period"
            sx={{ color: "white", backgroundColor: "#404040", borderRadius: "8px" }}
          >
            {timePeriods.map((period) => (
              <MenuItem key={period} value={period} sx={{ color: "black" }}>
                {period}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Bar data={chartData[selectedPeriod]} options={chartOptions} height={100}/>
    </Paper>
  );
};

export default AnalyticsGraph;
