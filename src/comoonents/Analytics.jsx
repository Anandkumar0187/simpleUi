import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Analytics = () => {
  const chartData = {
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#7295FF", "blue"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <Paper
      sx={{
        padding: 3,
        backgroundColor: "#20202A",
        color: "white",
        display: "flex",
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "12px",
        minHeight: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: "clamp(18px, 2vw, 24px)",
            mb: 1,
            textAlign: "left",
          }}
        >
          Net Profit
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: "clamp(24px, 3vw, 36px)",
              mr: 1,
            }}
          >
            $12,345
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box display="flex">
          <ArrowDropUpIcon sx={{ color: "green", fontSize: 32 }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              fontSize: "clamp(14px, 1.5vw, 16px)",
              color: "green",
            }}
          >
            15%
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          width: "160px",
          height: "160px",
        }}
      >
        <Doughnut data={chartData} />

        <Box
          sx={{
            position: "absolute",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "clamp(16px, 1.5vw, 18px)",
              color: "white",
            }}
          >
            70%
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "clamp(12px, 1.2vw, 14px)",
              color: "#aaaaaa",
            }}
          >
            Goal <br />
            completed
          </Typography>
        </Box>
        <Typography fontSize="8px">
          *The values here has been rounded off.
        </Typography>
      </Box>
    </Paper>
  );
};

export default Analytics;
