import React from "react";
import { Box, Typography } from "@mui/material";
import { BasePanel } from "./BasePanel.tsx";
import { Category } from "../models/Category.ts";
import { Nation } from "../models/Nation.ts";
import { Score } from "../hooks/useWorldScore.ts";

type Props = {
  nation: Nation;
  category: Category;
  score: Score;
  setCategoryScore: (category: Category, score: Score) => void;
};

export const MultipliedScorePanel = ({
  nation,
  category,
  score,
  setCategoryScore,
}: Props) => {
  const { baseScore, multiplier } = score;
  const total = baseScore * multiplier;
  const updateBasePoint = (diff: number) =>
    setCategoryScore(category, { baseScore: baseScore + diff, multiplier });
  const updateMultiplier = (diff: number) =>
    setCategoryScore(category, { baseScore, multiplier: multiplier + diff });
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
    <BasePanel onClick={handleClick} nation={nation}>
      <Typography
        variant="h5"
        sx={{
          position: "absolute",
          top: 12,
          left: 12,
          verticalAlign: "bottom",
          fontWeight: "bold",
          fontSize: { sm: "3vh", xs: "2.5vh" },
        }}
      >
        {category}
      </Typography>
      <Box
        sx={{
          typography: "h1",
          fontWeight: "bold",
          fontSize: { sm: "12vh", xs: "8vh" },
        }}
      >
        {baseScore}
      </Box>
      <Typography variant="h2" sx={{ fontSize: { sm: "6vh", xs: "4vh" } }}>
        X
      </Typography>
      <Box
        sx={{
          typography: "h1",
          fontWeight: "bold",
          fontSize: { sm: "12vh", xs: "8vh" },
        }}
      >
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
          fontSize: { sm: "3vh", xs: "2vh" },
        }}
      >
        {total}
      </Typography>
    </BasePanel>
  );
};
