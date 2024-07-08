import React from "react";
import { Box } from "@mui/material";

const SliderHeader = () => {
  return (
    <Box
      sx={{
        marginBottom: { xs: "50px", sm: "15px" },
        fontSize: { xs: "38px", sm: "38px", md: "58px" },
        fontWeight: "800",
        lineHeight: { sm: "44.044px", md: "60px" },
        color: "initial", // Set the color property if needed
      }}
    >
      <div
        dangerouslySetInnerHTML={{
          __html:
            ("sliderContainer.sliderHeader.SliderTitle",
            {
              x: "sliderContainer.sliderHeader.synergyFor",
              y: "sliderContainer.sliderHeader.success",
              z: "sliderContainer.sliderHeader.withUs",
            }),
        }}
      />
      {/*<p>*/}
      {/*    {t("sliderContainer.sliderHeader.synergyFor")} <br/>*/}
      {/*    <span style={{color: '#255C09'}}>*/}
      {/*      {t("sliderContainer.sliderHeader.success")}*/}
      {/*    </span>*/}

      {/*    {t("sliderContainer.sliderHeader.withUs")}*/}
      {/*</p>*/}
    </Box>
  );
};

export default SliderHeader;
