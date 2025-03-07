import { Nation } from "../models/Nation.ts";
import { Category } from "../models/Category.ts";
import { useEffect, useState } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../firebase.ts";

export type Score = {
  baseScore: number;
  multiplier: number;
};
export type NationScore = Record<Category, Score>;
export type WorldScore = Record<Nation, NationScore>;

const initialWorldScore: WorldScore = Object.values(Nation).reduce(
  (acc, nation) => {
    return {
      ...acc,
      [nation]: Object.values(Category).reduce((acc, category) => {
        return { ...acc, [category]: { baseScore: 0, multiplier: 0 } };
      }, {} as NationScore),
    };
  },
  {} as WorldScore,
);

export const useWorldScore = () => {
  const [worldScore, setWorldScore] = useState(initialWorldScore);

  useEffect(() => {
    onSnapshot(doc(db, "score", "score"), (doc) => {
      setWorldScore(doc.data()?.score ?? initialWorldScore);
    });
  }, []);

  const setNationCategoryScore = (
    nation: Nation,
    category: Category,
    score: Score,
  ) => {
    const newWorldScore = {
      ...worldScore,
      [nation]: {
        ...worldScore[nation],
        [category]: score,
      },
    };
    setDoc(doc(db, "score", "score"), { score: newWorldScore }).then();
  };

  const getNationTotalScore = (nation: Nation) => {
    return Object.values(worldScore[nation]).reduce(
      (acc, score) => acc + score.baseScore * score.multiplier,
      0,
    );
  };

  const getNationScore = (nation: Nation) => {
    return worldScore[nation];
  };

  const resetWorldScore = () => {
    setDoc(doc(db, "score", "score"), { score: initialWorldScore }).then();
  };

  return {
    getNationScore,
    setNationCategoryScore,
    getNationTotalScore,
    resetWorldScore,
  };
};
