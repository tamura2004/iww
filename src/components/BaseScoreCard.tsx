import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import { Nation, NationColor } from "../models/Nation.ts";
import { LabelS } from "./LabelS.tsx";

export const BaseScoreCard = ({
  children,
  onClick,
  nation,
  label,
  totalScore,
}: {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  nation: Nation;
  label: string;
  totalScore?: number;
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        p: 2,
        paddingTop: 6,
        m: 1,
        width: "44%",
        height: "17vh",
        bgcolor: NationColor[nation],
        borderRadius: 2,
        touchAction: "none",
        position: "relative",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
          verticalAlign: "bottom",
        }}
      >
        <LabelS>{label}</LabelS>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          verticalAlign: "bottom",
        }}
      >
        <LabelS>{totalScore}</LabelS>
      </Box>

      {children}
    </Box>
  );
};
