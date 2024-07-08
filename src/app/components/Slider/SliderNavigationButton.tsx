import { Stack } from "@mui/material";
import React from "react";
import SliderCounter from "@/app/components/Slider/SliderCounter";
import { SliderImages } from "@/app/components/Slider/Slider";
import SliderArrow from "@/app/components/shared/SliderArrow";

const SliderNavigationButton = ({ ActiveSlider, activeIndex }) => {
  return (
    <Stack
      direction="row"
      gap={"15px"}
      sx={{
        marginY: "15px",
        alignSelf: "end",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <SliderArrow
        color={
          activeIndex === 0 ? "rgba(13, 19, 33,0.5)" : "rgba(13, 19, 33, 1)"
        }
        onClick={() => ActiveSlider?.slidePrev()}
        direction={"left"}
      />
      <SliderCounter activeIndex={activeIndex} />
      <SliderArrow
        color={
          activeIndex + 1 === SliderImages?.length
            ? "rgba(13, 19, 33,0.5)"
            : "rgba(13, 19, 33, 1)"
        }
        onClick={() => ActiveSlider?.slideNext()}
        direction={"right"}
      />
    </Stack>
  );
};

export default SliderNavigationButton;
