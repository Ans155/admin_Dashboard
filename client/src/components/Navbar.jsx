import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profileImage from "assets/profile.jpeg";
import {
    AppBar,
    Button,
    Box,
    Typography,
    IconButton,
    InputBase,
    Toolbar,
    Menu,
    MenuItem,
    useTheme,
  } from "@mui/material";

const Navbar = ({user, isSidebarOpen, setIsSidebarOpen}) => {
    const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon sx={{fontSize:"40px"}}/>
          </IconButton>
        </FlexBetween>


        {/* RIGHT SIDE */}
        <FlexBetween >
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "35px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "35px" }} />
            )}
          </IconButton>
          {/* <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton> */}
        </FlexBetween>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar