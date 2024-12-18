import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Icon,
  Tooltip,
  Avatar,
} from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Chat as ChatIcon,
  Api,
} from "@mui/icons-material";

const Header = () => {
  const headerItems = [
    { text: "Inbox", icon: <ChatIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Notifications", icon: <NotificationsIcon /> },
  ];
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#20202A",
        boxShadow: "none",
        height: "64px",
      }}
    >
      <Toolbar>
        <Api
          sx={{
            color: "#7295FF",
            height: "40px",
            width: "40px",
            ml: "-1vw",
            mr: "4vw",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#2A2B30",
            borderRadius: "10px",
          }}
        >
          <SearchIcon sx={{ color: "white" }} />
          <InputBase
            placeholder="Search"
            sx={{ ml: 1, flex: 1, color: "white", width: "10%" }}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {headerItems.map((item, index) => (
            <IconButton color="inherit" key={index}>
              <Tooltip title={item?.text} arrow>
                {item?.icon}
              </Tooltip>
            </IconButton>
          ))}
          <Tooltip title="Account" arrow>
            <Avatar
              alt="User Profile"
              src="/profile_image.jpg"
              sx={{ width: 30, height: 30, cursor: "pointer" }}
            />
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
