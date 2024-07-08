"use client";
import {
  AppBar,
  Container,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import ContactUsBtn from "./ContactUsBtn";
import { useParams, useRouter } from "next/navigation";

const Navbar = () => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();
  const params = useParams();
  const [mounted, setMounted] = useState(false);

  return (
    <>
      <AppBar
        position="static"
        component="nav"
        sx={{
          bgcolor: "rgb(245,245,245)",
          marginTop: { xs: "20px", sm: 0 },
          boxShadow: "none",
          marginBottom: { xs: 5, sm: 4, md: 6 },
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            "&.MuiContainer-root": {
              px: { sx: "16px", sm: "70px", md: "156px" },
            },
          }}
        >
          <Toolbar
            sx={{
              bgcolor: "rgb(245,245,245)",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
              px: "0 !important",
              height: { xs: "63px", sm: "63px", md: "90px" },
            }}
          >
            <Stack
              direction={"row"}
              gap={"15px"}
              alignItems={"center"}
              justifyContent={"flex-start"}
            >
              <ContactUsBtn />
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      )
    </>
  );
};

export default Navbar;
