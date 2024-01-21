"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const drawerWidth = 240;
const navItems = [
  "Home",
  "Associates",
  "Executive Board",
  "Info",
  "Photo Gallery",
  "Contact Us",
];

const navExtraItems = ["Calendar"];
const navExtraItemsIcons = [
  <FaFacebookF key='facebook' />,
  <FaInstagram key='instagram' />,
  <FaLinkedin key='linkedin' />,
  <FaTwitter key='twitter' />,
];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        Logo
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText sx={{ fontSize: "16px" }} primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        sx={{ bgcolor: "white" }}
        elevation={0}
        position='sticky'
        component='nav'
      >
        <Toolbar>
          <IconButton
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            color='ButtonText'
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Logo
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
            }}
          >
            <Box display='flex' alignSelf='flex-end'>
              <List sx={{ display: "flex" }}>
                {navExtraItemsIcons.map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton sx={{ textAlign: "center" }}>
                      <ListItemText
                        sx={{ fontSize: "16px", color: "#335889" }}
                        primary={item}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <List sx={{ display: "flex" }}>
                {navExtraItems.map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton sx={{ textAlign: "center" }}>
                      <ListItemText
                        sx={{ fontSize: "16px", color: "#335889" }}
                        primary={item}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Divider />
            <Box paddingY={2} display='flex'>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    fontSize: "16px",
                    ...(item === "Contact Us" && {
                      bgcolor: "#335889",
                      color: "white",
                    }),
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
