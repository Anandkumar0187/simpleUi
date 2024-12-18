import React from "react";
import { Paper, Box, Typography, Avatar, Chip } from "@mui/material";

const ordersData = [
  { name: "John Doe", orderNo: "#12345", amount: "$120.00", status: "Delivered" },
  { name: "Jane Smith", orderNo: "#12346", amount: "$80.00", status: "Pending" },
  { name: "Chris Evans", orderNo: "#12347", amount: "$150.00", status: "Cancelled" },
  { name: "Emily Davis", orderNo: "#12348", amount: "$100.00", status: "Delivered" },
  { name: "Michael Brown", orderNo: "#12349", amount: "$200.00", status: "Pending" },
  { name: "Sophia Lee", orderNo: "#12350", amount: "$90.00", status: "Cancelled" },
];

const RecentOrders = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "success";
      case "Cancelled":
        return "error";
      case "Pending":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <Paper
      sx={{
        padding: 3,
        backgroundColor: "#20202A",
        color: "white",
        minHeight: "200px",
        overflowX: "auto",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2, textAlign: "left" }}>
        Recent Orders
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          padding: 1,
          backgroundColor: "#20202A",
          borderRadius: "8px",
          marginBottom: 2,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flex: "1 1 25%", fontWeight: 400, textAlign: "left" }}>Customer</Box>
        <Box sx={{ flex: "1 1 25%", fontWeight: 400 }}>Order No</Box>
        <Box sx={{ flex: "1 1 25%", fontWeight: 400 }}>Amount</Box>
        <Box sx={{ flex: "1 1 25%", fontWeight: 400 }}>Status</Box>
      </Box>

      {ordersData.map((order, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            padding: 1,
            marginBottom: 1,
            backgroundColor: "#20202A",
            borderBottom: "1px solid gray",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flex: "1 1 25%", display: "flex", alignItems: "center" }}>
            <Avatar
              sx={{
                marginRight: 2,
                backgroundColor: "#7295FF",
                width: "30px",
                height: "30px",
              }}
            >
              {order.name[0]}
            </Avatar>
            <Typography variant="body1" sx={{ fontWeight: 300 }}>
              {order.name}
            </Typography>
          </Box>

          <Box sx={{ flex: "1 1 25%" }}>
            <Typography variant="body1">{order.orderNo}</Typography>
          </Box>

          <Box sx={{ flex: "1 1 25%" }}>
            <Typography variant="body1">{order.amount}</Typography>
          </Box>

          <Box sx={{ flex: "1 1 25%" }}>
            <Chip
              label={order.status}
              color={getStatusColor(order.status)}
              sx={{ fontWeight: 300 }}
            />
          </Box>
        </Box>
      ))}
    </Paper>
  );
};

export default RecentOrders;
