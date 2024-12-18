import React from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import Analytics from "./Analytics";
import AnalyticsGraph from "./AnalyticsGraph";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RecentOrders from "./RecentOrders";
import CustomerFeedback from "./CustomerFeedback";

const Dashboard = () => {
  const orderSection = [
    {
      logo: <ShoppingBagRoundedIcon color="primary" />,
      color: "#7295FF",
      name: "Total Orders",
      total: "75",
      growth: 3,
      isGrowthPositive: true,
    },
    {
      logo: <ShoppingBagRoundedIcon color="success" />,
      color: "lightgreen",
      name: "Total Delivered",
      total: "70",
      growth: 3,
      isGrowthPositive: false,
    },
    {
      logo: <ShoppingBagRoundedIcon color="error" />,
      color: "lightcoral",
      name: "Total Cancelled",
      total: "05",
      growth: 3,
      isGrowthPositive: true,
    },
    {
      logo: <MonetizationOnIcon color="secondary" />,
      color: "lightpink",
      name: "Total Revenue",
      total: "$12K",
      growth: 3,
      isGrowthPositive: false,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 2,
        minHeight: "calc(100vh - 48px)",
        width: "100vw",
        // backgroundColor: "#121212",
        marginTop: "48px",
        maxWidth: "100vw",
        marginX: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          mb: 3,
          fontWeight: 600,
          textAlign: "left",
        }}
      >
        Dashboard
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "2fr 1fr",
          },
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 2,
          }}
        >
          {orderSection.map((item, index) => (
            <Box
              key={index}
              sx={{
                border: "1px solid #333",
                borderRadius: "8px",
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#20202A",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
                position: "relative",
                minHeight: "100px",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  width: "2.5rem",
                  height: "2.5rem",
                  backgroundColor: item.color,
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.logo}
              </Box>

              <Typography
                sx={{
                  fontWeight: 500,
                  color: "white",
                  mt: 6,
                  fontSize: "clamp(12px, 1.2vw, 16px)",
                  textAlign: "left",
                }}
              >
                {item.name}
              </Typography>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{ mt: 1 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "white",
                    fontSize: "clamp(20px, 2vw, 28px)",
                  }}
                >
                  {item.total}
                </Typography>
                <Box display="flex" alignItems="center">
                  {item.isGrowthPositive ? (
                    <ArrowDropUpIcon sx={{ color: "green", fontSize: 24 }} />
                  ) : (
                    <ArrowDropDownIcon sx={{ color: "red", fontSize: 24 }} />
                  )}
                  <Typography
                    variant="body2"
                    sx={{
                      color: item.isGrowthPositive ? "green" : "red",
                      fontSize: "clamp(10px, 1vw, 14px)",
                    }}
                  >
                    {item.growth}%
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Analytics />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "2fr 1fr",
          },
          gap: 2,
          mt: 3,
        }}
      >
        <Paper
          sx={{
            padding: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#20202A",
            color: "white",
            minHeight: "200px",
          }}
        >
          <AnalyticsGraph />
        </Paper>

        <Paper
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#20202A",
            color: "white",
            minHeight: "200px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              m: 2,
            }}
          >
            <MyLocationIcon sx={{ width: "40px", height: "40px" }} />
            <Typography
              sx={{ flexGrow: 1, textAlign: "left", ml: 2 }}
              variant="p"
            >
              Goals
            </Typography>
            <IconButton sx={{ backgroundColor: "#404040", color: "white" }}>
              <KeyboardArrowRightIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              mb: 2,
            }}
          >
            <LunchDiningIcon sx={{ width: "40px", height: "40px" }} />
            <Typography
              sx={{ flexGrow: 1, textAlign: "left", ml: 2 }}
              variant="p"
            >
              Popular Dishes
            </Typography>
            <IconButton sx={{ backgroundColor: "#404040", color: "white" }}>
              <KeyboardArrowRightIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <RamenDiningIcon sx={{ width: "40px", height: "40px" }} />
            <Typography
              sx={{ flexGrow: 1, textAlign: "left", ml: 2 }}
              variant="p"
            >
              Menus
            </Typography>
            <IconButton sx={{ backgroundColor: "#404040", color: "white" }}>
              <KeyboardArrowRightIcon />
            </IconButton>
          </Box>
        </Paper>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "2fr 1fr",
          },
          gap: 2,
          mt: 3,
        }}
      >
        <RecentOrders />
        <CustomerFeedback />
      </Box>
    </Box>
  );
};

export default Dashboard;
