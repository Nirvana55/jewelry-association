"use client";

import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const theme = createTheme({
  // palette: {
  //   mode: "light",
  // },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#335889",
    },
    text: {
      primary: "#335889",
      secondary: "#335889",
    },
  },
});

export default theme;
