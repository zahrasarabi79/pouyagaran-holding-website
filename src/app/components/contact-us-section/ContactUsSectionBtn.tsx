import { Button, useMediaQuery, useTheme } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import React from "react";

export interface ITranslation {
  page: any;
  lang: string;
}

const ContactUsSectionBtn = () => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();
  const params = useParams();
  return (
    <Button
      onClick={() => router.push(`/${params?.locale}/contact-us`)}
      sx={{
        bgcolor: "#0D1321",
        justifyContent: "space-between",
        alignItems: "center",
        width: 176,
        height: 52,
        display: "flex",
        gap: "8px",
        padding: "10px 20px",
        color: "rgb(245,245,245)",
        fontSize: "16px",
        textAlign: "center",
      }}
      variant="contained"
      color="primary"
    >
      {"shared.contactUs"}
      <img
        src="/icon/PhoneCallingRounded.svg"
        alt="contact-us"
        style={{ height: 32, width: 32 }}
      />
    </Button>
  );
};

export default ContactUsSectionBtn;
