import { Nation } from "../models/Nation.ts";
import { Category } from "../models/Category.ts";
import { useState } from "react";

type WorldScore = Record<Nation, Record<Category, number>>;

const getInitialNationScore = (nation: Nation) => {
  return {
    [nation]: Object.values(Category).reduce(
      (acc, category) => {
        return { ...acc, [category]: 0 };
      },
      {} as Record<Category, number>,
    ),
  };
};

const initialWorldScore = Object.values(Nation).reduce((acc, nation) => {
  return { ...acc, ...getInitialNationScore(nation) };
}, {} as WorldScore);

export const useWorldScore = () => {
  const [worldScore, setWorldScore] = useState(initialWorldScore);

  const setNationCategoryScore = (
    nation: Nation,
    category: Category,
    score: number,
  ) => {
    setWorldScore({
      ...worldScore,
      [nation]: {
        ...worldScore[nation],
        [category]: score,
      },
    });
  };

  const getNationTotalScore = (nation: Nation) => {
    return Object.values(worldScore[nation]).reduce(
      (acc, score) => acc + score,
      0,
    );
  };

  return { setNationCategoryScore, getNationTotalScore };
};
