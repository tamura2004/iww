import React from "react";
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

export const FixedScoreCard = ({
  nation,
  category,
  score,
  setCategoryScore,
}: Props) => {
  const { baseScore } = score;
  const addScore = (diff: number) => {
    setCategoryScore(category, { baseScore: baseScore + diff, multiplier: 1 });
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
    <BaseScoreCard onClick={handleClick} nation={nation} label={category}>
      <ScoreNumber score={baseScore} withOperator />
    </BaseScoreCard>
  );
};
