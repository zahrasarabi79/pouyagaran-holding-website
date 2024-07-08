import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";

const ContactUsInfo = () => {
  const footerItems = [
    { key: `${"shared.contactUs"} : `, value: "shared.pouyagaranNumber" },
    { key: `${"shared.email"} : `, value: "shared.pouyagaranEmail" },
    { key: `${"shared.address"} : `, value: "shared.pouyagaranAddress" },
    { key: `${"shared.linkedin"} : `, value: "shared.pouyagaranLinkedin" },
  ];

  return (
    <List sx={{ marginTop: "18px", p: 0 }}>
      {footerItems.map((footerItem, index) => (
        <React.Fragment key={index}>
          <ListItem disablePadding key={Math.random()}>
            <ListItemButton
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                marginY: 3,
                marginX: { xs: "14px", sm: 3, md: 1 },
                padding: 0,
              }}
            >
              <ListItemText
                sx={{
                  "& .MuiTypography-root": { fontSize: "14px" },
                  lineHeight: "25px",
                  color: "rgba(13, 19, 33, 0.7)",
                  textAlign: "start",
                }}
                primary={footerItem.key}
              />
              <ListItemText
                sx={{
                  "& .MuiTypography-root": { fontSize: "14px" },
                  lineHeight: "25px",
                  color: "rgba(13, 19, 33, 1)",
                  textAlign: "end",
                }}
                primary={footerItem.value}
              />
            </ListItemButton>
          </ListItem>
          <Divider
            sx={{ bgcolor: "rgba(13, 19, 33, 0.2)", marginBottom: "10px" }}
          />
        </React.Fragment>
      ))}
    </List>
  );
};

export default ContactUsInfo;
