import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Typography,
  Box,
  Tooltip,
} from "@mui/material";
import {
  HomeOutlined as HomeIcon,
  BarChartOutlined as BarChartIcon,
  AssignmentOutlined as AssignmentIcon,
  AccountBalanceWalletOutlined as AccountBalanceWalletIcon,
  LocalMallOutlined as LocalMall,
  Logout as LogoutIcon,
} from "@mui/icons-material";

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Analysis", icon: <BarChartIcon /> },
    { text: "Task", icon: <AssignmentIcon /> },
    { text: "Wallet", icon: <AccountBalanceWalletIcon /> },
    { text: "Store", icon: <LocalMall /> },
  ];

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 100,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: "auto",
          top: 64,
          height: "calc(100% - 64px)",
          boxSizing: "border-box",
          backgroundColor: "#20202A",
        },
      }}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            selected={selectedIndex === index}
            onClick={() => handleListItemClick(index)}
            sx={{
              "&:hover": {
                color: "#7295FF",
              },
            }}
          >
            <Tooltip title={item.text} placement="right" arrow>
              <ListItemIcon
                sx={{
                  color: selectedIndex === index ? "#7295FF" : "white",
                  "&:hover": {
                    color: "#7295FF",
                  },
                }}
              >
                {item.icon}
              </ListItemIcon>
            </Tooltip>
          </ListItemButton>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <List>
        <ListItemButton
          onClick={() => {
            console.log("Logout clicked");
          }}
        >
          <Tooltip title="Logout" placement="right" arrow>
            <ListItemIcon
              sx={{
                color: "white",
                "&:hover": {
                  color: "red",
                },
              }}
            >
              <LogoutIcon />
            </ListItemIcon>
          </Tooltip>
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
