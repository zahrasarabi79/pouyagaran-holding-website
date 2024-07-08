"use client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const PerformanceOverview = () => {
  const PerformanceData = [
    {
      title: (
        <Box>
          <span
            dangerouslySetInnerHTML={{
              __html:
                ("aboutUsSection.happyEmployees",
                {
                  x: "aboutUsSection.happy",
                  y: "aboutUsSection.employees",
                }),
            }}
          />
        </Box>
      ),
      number: "50+",
    },
    {
      title: (
        <Box>
          <span
            dangerouslySetInnerHTML={{
              __html:
                ("aboutUsSection.completedProjects",
                {
                  x: "aboutUsSection.completed",
                  y: "aboutUsSection.projects",
                }),
            }}
          />
        </Box>
      ),
      number: "10+",
    },
  ];

  return (
    <Grid
      container
      sx={{
        rowGap: { xs: 5, sm: 5, md: "65px" },
        flexWrap: "wrap",
        justifyItems: "end",
      }}
    >
      {PerformanceData.map((item, index) => (
        <Grid
          item
          key={index}
          xs={6}
          rowGap={{ xs: 1, sm: 1, md: 2 }}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography
            component={"div"}
            sx={{
              fontSize: { xs: 32, sm: 32, md: 48 },
              lineHeight: "37px",
            }}
          >
            {item.number}
          </Typography>
          <Typography
            component={"div"}
            sx={{
              fontSize: 16,
              display: "flex",
              direction: "ltr",
              justifyContent: "flex-end",
              lineHeight: "20px",
              opacity: "0.5",
              fontFamily: "Arial",
              color: "rgba(13, 19, 33, 0.5)",
            }}
          >
            {item.title}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default PerformanceOverview;
