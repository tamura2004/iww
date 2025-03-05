import React from "react";
import { Box, Typography } from "@mui/material";
import { BasePanel } from "./BasePanel.tsx";
import { Category } from "../models/Category.ts";

type Props = {
  category: Category;
  setCategoryScore: (category: Category, score: number) => void;
};

export const MultipliedScorePanel = ({ category, setCategoryScore }: Props) => {
  const [basePoint, setBasePoint] = React.useState(0);
  const [multiplier, setMultiplier] = React.useState(0);
  const total = basePoint * multiplier;
  const updateBasePoint = (diff: number) => {
    setBasePoint((prevBasePoint) => {
      const newBasePoint = prevBasePoint + diff;
      setCategoryScore(category, newBasePoint * multiplier);
      return newBasePoint;
    });
  }
  const updateMultiplier = (diff: number) => {
    setMultiplier((prevMultiplier) => {
      const newMultiplier = prevMultiplier + diff;
      setCategoryScore(category, basePoint * newMultiplier);
      return newMultiplier;
    });
  }
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, width, top, height } =
      event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - left;
    const clickY = event.clientY - top;
    if (clickX < width / 2 && clickY < height / 2) {
      updateBasePoint(1);
    } else if (clickX >= width / 2 && clickY < height / 2) {
      updateMultiplier(1);
    } else if (clickX < width / 2 && clickY >= height / 2) {
      updateBasePoint(-1);
    } else {
      updateMultiplier(-1);
    }
  };

  return (
    <BasePanel onClick={handleClick}>
      <Typography
        variant="h5"
        sx={{
          position: "absolute",
          top: 12,
          left: 12,
          verticalAlign: "bottom",
          fontWeight: "bold",
        }}
      >
        {category}
      </Typography>
      <Box sx={{ typography: "h1", fontWeight: "bold", fontSize: "12vh" }}>
        {basePoint}
      </Box>
      <Typography variant="h2">X</Typography>
      <Box sx={{ typography: "h1", fontWeight: "bold", fontSize: "12vh" }}>
        {multiplier}
      </Box>
      <Typography
        variant="h5"
        sx={{
          position: "absolute",
          bottom: 12,
          right: 12,
          verticalAlign: "bottom",
          fontWeight: "bold",
        }}
      >
        {total}
      </Typography>
    </BasePanel>
  );
};
