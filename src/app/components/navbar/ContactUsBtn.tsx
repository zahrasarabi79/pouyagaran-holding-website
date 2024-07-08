"use client";
import { Button, useTheme } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import Icon from "@/app/components/shared/Icon";

export interface IContactUsBtnProps {
  page: any;
  lang: string;
}

const ContactUsBtn = () => {
  const theme = useTheme();
  const isSmUp = theme.breakpoints.up("sm");
  const isMdUp = theme.breakpoints.up("md");
  const router = useRouter();
  const params = useParams();

  return (
    <Button
      onClick={() => router.push(`/contact-us`)}
      sx={{
        fontSize: { xs: 14, sm: 8, md: 18 },
        lineHeight: { xs: "18px", sm: "8px", md: "18px" },
        textAlign: "center",
        color: "background.default",
        bgcolor: "#0D1321",
        justifyContent: { xs: "center", sm: "space-between" },
        alignItems: "center",
        width: { xs: "100%", sm: "auto", md: "auto" },
        height: { xs: "83px", sm: "auto" },
        display: "flex",
        gap: "8px",
        mb: { xs: 5, sm: 0 },
      }}
      variant="contained"
      color="primary"
      endIcon={
        <Icon
          color={"white"}
          pathName={"../icon/PhoneCallingRounded.svg"}
          size={isSmUp ? "32px" : isMdUp ? "14px" : "25px"}
        />
      }
    >
      Contact Us
    </Button>
  );
};

export default ContactUsBtn;
