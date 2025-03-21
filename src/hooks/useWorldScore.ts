import { Nation } from "../models/Nation.ts";
import { Category } from "../models/Category.ts";
import { useEffect, useState } from "react";
import { doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.ts";

export type Score = {
  baseScore: number;
  multiplier: number;
};
type EventDate = {
  date: Date;
}
export type NationScore = Record<Category, Score>;
export type WorldScore = Record<Nation, NationScore> & EventDate;

const initialWorldScore = Object.values(Nation).reduce(
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
    if (score.baseScore < 0 || score.multiplier < 0) {
      return;
    }
    updateDoc(doc(db, "score", "score"), { [`score.${nation}.${category}`]: score }).then();

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
