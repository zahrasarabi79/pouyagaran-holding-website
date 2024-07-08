"use client";
import { Container, Stack, useTheme } from "@mui/material";
import React from "react";
import SliderHeader from "./SliderHeader";
import Slider from "./Slider";
import Image from "next/image";
import { useParams } from "next/navigation";

export interface IPageTranslation {
  page: any;
}

const SliderContainer = () => {
  const theme = useTheme();
  const isSmDown = theme.breakpoints.down("sm");
  const isMdDown = theme.breakpoints.down("md");
  const params = useParams();

  return (
    <Container
      maxWidth={false}
      sx={{
        overflow: "hidden",
        "&.MuiContainer-root": { px: { sx: "16px", sm: "70px", md: "156px" } },
      }}
    >
      <Stack sx={{ position: "relative", zIndex: 0 }}>
        <Image
          src={
            isSmDown
              ? "/image/curve-slider-mobile.svg"
              : isMdDown
                ? "/image/curve-slider-tablet.svg"
                : "/image/curve-slider.svg"
          }
          alt="slider-curve"
          width={isSmDown ? 209 : isMdDown ? 330 : 530}
          height={isSmDown ? 562 : isMdDown ? 703 : 984}
          style={{
            position: "absolute",
            [params?.locale === "en" ? "left" : "right"]: isSmDown
              ? -48
              : isMdDown
                ? -168
                : -282,
            transform:
              params?.locale === "en"
                ? "rotate(0deg)"
                : "rotate(360deg) scaleX(-1)",
          }}
          loading={"eager"}
        />
      </Stack>
      <SliderHeader />
      <Slider />
    </Container>
  );
};

export default SliderContainer;
