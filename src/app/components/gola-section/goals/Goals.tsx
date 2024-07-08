"use client";
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

const Goals = () => {
  const theme = useTheme();
  const isMdDown = theme.breakpoints.down("md");
  return (
    <Grid
      container
      sx={{
        px: { xs: 2, sm: 0 },
        mt: { xs: 44, sm: 38, lg: 38 },
        gap: { xs: 3, sm: 0 },
      }}
    >
      <Grid item xs={12} sm={6} sx={{ justifyContent: "space-between" }}>
        <Stack
          gap={1}
          sx={{
            height: "100%",
            width: "100%",
            pl: { sx: "16px", sm: "70px", md: "156px" },
            pr: { xs: 0, sm: "45px", md: "140px" },
            mx: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Box
            color="initial"
            sx={{
              fontWeight: 800,
              fontSize: { xs: 31, sm: 29, md: 42 },
              textAlign: "justify",
              dir: "rtl",
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html:
                  ("GoalSection.GoalTitle",
                  {
                    x: "GoalSection.letBuild",
                    y: "GoalSection.successTogether",
                  }),
              }}
            />
          </Box>
          <Typography
            color="initial"
            sx={{ fontSize: { xs: 12, sm: 14, md: 16 }, fontFamily: "Arial" }}
          >
            {"GoalSection.GoalParagraph"}
          </Typography>
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          position: "relative",
          display: "flex",
          height: { xs: "23vh", md: "47vh", sm: "23vh" },
          justifyContent: "end",
        }}
      >
        <Image
          alt="image"
          src={isMdDown ? "/image/goals-image.png" : "/image/goal-desktop.png"}
          fill
          style={{ position: "absolute", objectFit: "cover" }}
          priority={true}
        />
      </Grid>
    </Grid>
  );
};

export default Goals;
