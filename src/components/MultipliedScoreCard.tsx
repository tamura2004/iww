import React from "react";
import { Typography } from "@mui/material";
import { BaseScoreCard } from "./BaseScoreCard.tsx";
import { Category } from "../models/Category.ts";
import { Nation } from "../models/Nation.ts";
import { Score } from "../hooks/useWorldScore.ts";
import { ScoreNumber } from "./ScoreNumber.tsx";

type Props = {
  nation: Nation;
  category: Category;
  score: Score;
  setCategoryScore: (category: Category, score: Score) => void;
};

export const MultipliedScoreCard = ({
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
    <BaseScoreCard
      onClick={handleClick}
      nation={nation}
      label={category}
      totalScore={total}
    >
      <ScoreNumber score={baseScore} withOperator />
      <Typography
        variant="h2"
        sx={{ fontSize: { sm: "5vh", xs: "3vh" }, m: 1 }}
      >
        X
      </Typography>
      <ScoreNumber score={multiplier} withOperator />
    </BaseScoreCard>
  );
};
