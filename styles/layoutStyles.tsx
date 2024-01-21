"use client";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const LayoutContainerStyle = styled(Box)(({ theme }) => ({
  width: "80rem",
  margin: "0 auto",
  minHeight: "100vh",
  height: "auto",
  display: "flex",
  flexDirection: "column",
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
