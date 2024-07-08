"use client";
import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import ContactUsIntroduction from "@/app/components/Contact-us-page/contactUsIntroduction/ContactUsIntroduction";
import ContactUsInfo from "@/app/components/Contact-us-page/Contact-us-Info/ContactUsInfo";
import ContactUsForm from "@/app/components/Contact-us-page/contact-us-form/ContactUsForm";

const ContactUsPage = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const params = useParams();

  return (
    <Container
      maxWidth={false}
      sx={{
        "&.MuiContainer-root": { px: { sx: "16px", sm: "70px", md: "156px" } },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Image
        src={
          isSmDown
            ? "/image/curve-slider-mobile.svg"
            : isMdDown
              ? "/image/curve-slider-tablet.svg"
              : "/image/curve-slider.svg"
        }
        alt="slider-curve"
        width={isSmDown ? 330 : isMdDown ? 330 : 530}
        height={isSmDown ? 703 : isMdDown ? 703 : 984}
        style={{
          zIndex: 12,
          position: "absolute",
          top: isSmDown ? 24 : isMdDown ? 11 : 17,
          [params?.locale === "en" ? "left" : "right"]: isSmDown
            ? -113
            : isMdDown
              ? -93
              : -126,
          transform:
            params?.locale === "en"
              ? "rotate(0deg)"
              : "rotate(360deg) scaleX(-1)",
        }}
      />

      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={12}>
          <ContactUsIntroduction />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{ order: { xs: 2, sm: 2, md: 3 } }}
        >
          <ContactUsInfo />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          sx={{ zIndex: 20, order: { xs: 3, sm: 3, md: 2 } }}
        >
          <ContactUsForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUsPage;
