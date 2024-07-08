import { Button } from "@mui/material";
import Icon from "@/app/components/shared/Icon";
import React from "react";
import { useParams } from "next/navigation";

const SliderArrow = ({ onClick, color, direction }) => {
  const params = useParams();
  const directionArrow =
    params?.locale === "en"
      ? direction === "left"
        ? "0deg"
        : "180deg"
      : direction === "left"
        ? "180deg"
        : "0deg";
  console.log(directionArrow, direction, "directionArrow");
  return (
    <Button
      sx={{
        "&:focus": { color: "rgba(0,0,0,0) !important", boxShadow: "none" },
        "&:active": {
          color: "rgba(0,0,0,0) !important",
          boxShadow: "none",
        },
        "&:hover": { bgcolor: "rgba(0,0,0,0)", boxShadow: "none" },
        "&:select": { bgcolor: "rgba(0,0,0,0)", boxShadow: "none" },
        height: "20px",
        width: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 0,
      }}
      onClick={onClick}
      startIcon={
        <Icon
          pathName="../icon/Arrow.svg"
          style={{
            rotate: directionArrow,
          }}
          color={color}
          height="20px"
          width="30px"
          WebkitMaskSize="contain"
        />
      }
    />
  );
};

export default SliderArrow;
