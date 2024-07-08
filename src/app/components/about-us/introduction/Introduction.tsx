import React from "react";
import Typography from "@mui/material/Typography";
import ContactButton from "./ContactButton";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import Icon from "../../shared/Icon";
import { useParams } from "next/navigation";

const Introduction = () => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const params = useParams();

  return (
    <Stack
      gap={4}
      sx={{ marginY: { xs: "89px", sm: 0 }, position: "relative" }}
    >
      <Typography
        sx={{
          fontSize: { xs: "12px", sm: "14px", md: "16px" },
          fontFamily: "Arial",
          lineHeight: "25px",
        }}
      >
        {"aboutUsSection.introduction"}
      </Typography>
      <ContactButton />
      <Stack
        sx={{
          position: "absolute",
          left: { xs: "89px", sm: "-10px", md: "77px" },
          top: { xs: "197px", sm: "216px", md: "228px" },
          zIndex: 0,
          transform:
            params?.locale === "fa" || params?.locale === "ar"
              ? "rotate(360deg) scaleX(-1)"
              : "rotate(0deg)",
        }}
      >
        <Icon
          pathName={
            isSmUp
              ? "../image/curve-information.svg"
              : "../image/mpbileVector2.svg"
          }
          color="#255C09"
          width={isSmUp ? "214px" : "216px"}
          height={isSmUp ? "258px" : "474px"}
          WebkitMaskSize="contain"
        />
      </Stack>
    </Stack>
  );
};

export default Introduction;
