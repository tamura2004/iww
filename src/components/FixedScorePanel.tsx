import React from "react";
import { Box, Typography } from "@mui/material";
import { BasePanel } from "./BasePanel.tsx";
import { Category } from "../models/Category.ts";
import { Nation } from "../models/Nation.ts";

type Props = {
  nation: Nation;
  category: Category;
  setCategoryScore: (category: Category, score: number) => void;
};

export const FixedScorePanel = ({
  nation,
  category,
  setCategoryScore,
}: Props) => {
  const [score, setScore] = React.useState(0);
  const addScore = (diff: number) => {
    setScore((prevScore) => {
      const newScore = prevScore + diff;
      setCategoryScore(category, newScore);
      return newScore;
    });
  };
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { top, height } = event.currentTarget.getBoundingClientRect();
    const clickY = event.clientY - top;
    if (clickY < height / 2) {
      addScore(1);
    } else {
      addScore(-1);
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
        }}
      >
        {category}
      </Typography>
      <Box sx={{ typography: "h1", fontWeight: "bold", fontSize: "12vh" }}>
        {score}
      </Box>
    </BasePanel>
  );
};
