import { Stack, Typography } from "@mui/material";
import { SliderImages } from "@/app/components/Slider/Slider";
import React from "react";

const SliderCounter = ({ activeIndex }) => {
  return (
    <Stack
      direction="row"
      gap={"15px"}
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <Typography
        color="initial"
        sx={{ fontSize: { xs: "29px" }, color: "rgba(37, 92, 9, 1)" }}
      >
        {activeIndex + 1}
      </Typography>
      <Typography sx={{ fontSize: "11px" }}>/</Typography>
      <Typography color="initial" sx={{ fontSize: { xs: "29px" } }}>
        {SliderImages.length}
      </Typography>
    </Stack>
  );
};

export default SliderCounter;
