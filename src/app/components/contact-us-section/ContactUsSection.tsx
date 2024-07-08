import { Stack, Typography } from "@mui/material";
import React from "react";
import ContactUsSectionBtn from "./ContactUsSectionBtn";

const ContactUsSection = () => {
  return (
    <Stack
      sx={{ marginY: { xs: 9, sm: 9, md: 14 } }}
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
    >
      <Typography
        component={"div"}
        variant="body1"
        color="initial"
        sx={{
          margin: "auto",
          fontSize: { xs: 26, sm: 26, md: 42 },
          fontWeight: 800,
          textAlign: "center",
        }}
      >
        <p
          dangerouslySetInnerHTML={{
            __html:
              ("ContactUsSection.ContactUsSectionText",
              {
                x: "ContactUsSection.ConnectForStrategic",
                y: "ContactUsSection.ExcellenceToday",
              }),
          }}
        />
      </Typography>
      <ContactUsSectionBtn />
    </Stack>
  );
};

export default ContactUsSection;
