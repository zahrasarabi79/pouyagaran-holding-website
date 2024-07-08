import { Button, useTheme } from "@mui/material";
import React from "react";
import Icon from "../../shared/Icon";
import { useParams } from "next/navigation";

const ContactButton = () => {
  const theme = useTheme();
  const isSmDown = theme.breakpoints.down("sm");
  const isMdDown = theme.breakpoints.down("md");
  const params = useParams();

  return (
    <Button
      sx={{
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        marginInlineEnd: "auto",
        padding: "10px 20px !important",
        display: "flex",
        gap: "10px",
        fontSize: { xs: "18px", sm: "8px", md: "18px" },
        color: "rgb(245,245,245)",
      }}
      variant="contained"
      color="primary"
    >
      {"shared.contactUs"}
      <Icon
        pathName="../icon/ArrowBtn.svg"
        height={isSmDown ? "32px" : isMdDown ? "14px" : "32px"}
        width={isSmDown ? "32px" : isMdDown ? "14px" : "32px"}
        WebkitMaskSize={isSmDown ? "32px" : isMdDown ? "14px" : "32px"}
        style={{
          rotate:
            params?.locale === "fa" || params?.locale === "ar"
              ? "135deg"
              : "45deg",
        }}
      />
    </Button>
  );
};

export default ContactButton;
