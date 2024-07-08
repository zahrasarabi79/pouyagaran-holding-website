"use client";
import {
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Footer = () => {
  const footerItems = [
    { key: `${"shared.contactUs"} : `, value: "shared.pouyagaranNumber" },
    { key: `${"shared.email"} : `, value: "shared.pouyagaranEmail" },
    { key: `${"shared.address"} : `, value: "shared.pouyagaranAddress" },
    { key: `${"shared.linkedin"} : `, value: "shared.pouyagaranLinkedin" },
  ];
  return (
    <Stack
      sx={{
        paddingTop: "20px",
        bgcolor: "rgba(13, 19, 33, 1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container
        sx={{
          "&.MuiContainer-root": {
            px: { sx: "16px", sm: "70px", md: "156px" },
          },
        }}
      >
        <List>
          {footerItems.map((footerItem, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding key={Math.random()}>
                <ListItemButton
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginY: 3,
                    marginX: 2,
                    padding: 0,
                  }}
                >
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": { fontSize: "14px" },
                      lineHeight: "25px",
                      color: "rgba(245, 245, 245,0.7)",
                      textAlign: "start",
                    }}
                    primary={footerItem.key}
                  />
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": { fontSize: "14px" },
                      lineHeight: "25px",
                      color: "rgba(245, 245, 245, 1)",
                      textAlign: "end",
                    }}
                    primary={footerItem.value}
                  />
                </ListItemButton>
              </ListItem>
              <Divider sx={{ bgcolor: "rgba(245, 245, 245, 0.2)" }} />
            </React.Fragment>
          ))}
        </List>
        <Stack gap={2} sx={{ pt: "46px", pb: " 24px" }}>
          <Typography
            sx={{ fontSize: 14, lineHeight: "16px" }}
            color="rgba(245, 245, 245, 0.5)"
          >
            {"footer.rightsReserved"}
          </Typography>
          <Typography
            sx={{ fontSize: 14, lineHeight: "16px" }}
            color="rgba(245, 245, 245, 1)"
          >
            {"footer.creator"}
          </Typography>
        </Stack>
      </Container>
      <img
        src="/image/curve-footer.svg"
        style={{
          position: "absolute",
          top: "-85px",
          left: "-85px",
          width: "261px",
          height: "972px",
        }}
      />
    </Stack>
  );
};

export default Footer;
