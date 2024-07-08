import { Stack, Typography } from "@mui/material";
import React from "react";

const ContactUsIntroduction = () => {
  return (
    <Stack sx={{ marginY: 8, gap: 4 }}>
      <Stack gap={"15px"}>
        <Typography
          color="initial"
          sx={{
            fontWeight: 800,
            fontSize: { xs: 38, sm: 38, md: 58 },
            lineHeight: { xs: "44px", sm: "44px", md: "60px" },
          }}
        >
          {"contactUsPage.contactUsIntroduction.header.LetBuild"}
          <br />
          <span style={{ color: "rgba(37, 92, 9, 1)" }}>
            {"contactUsPage.contactUsIntroduction.header.success"}
          </span>
          {"contactUsPage.contactUsIntroduction.header.together"}
        </Typography>
        <Typography
          color="initial"
          sx={{
            fontSize: { xs: 12, sm: 14, md: 16 },
            fontFamily: "Arial",
            lineHeight: "25px",
          }}
        >
          {"contactUsPage.contactUsIntroduction.body"}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ContactUsIntroduction;
