"use client";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const LayoutContainerStyle = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  height: "auto",
}));

export const CommonContainerStyle = styled(Box)(({ theme }) => ({
  width: "85rem",
  margin: "0 auto",
  [theme.breakpoints.down("lg")]: {
    width: "60rem",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
