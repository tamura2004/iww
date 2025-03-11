import { Nation } from "../models/Nation.ts";
import { useEffect, useState } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { Category } from "../models/Category.ts";
import { NationScore, Score } from "../models/Score.ts";
import {scoreCollection} from "../firebase.ts";

const initialNationScore: NationScore = Object.values(Category).reduce(
  (acc, category) => {
    return { ...acc, [category]: { baseScore: 0, multiplier: 0 } };
  },
  {} as NationScore,
);

export const useNationScore = (nation: Nation) => {
  const [nationScore, setNationScore] =
    useState<NationScore>(initialNationScore);

  useEffect(() => {
    onSnapshot(doc(scoreCollection, nation), (doc) => {
      setNationScore(doc.data()?.score ?? initialNationScore);
    });
  }, [nation]);

  const setCategoryScore = (category: Category, score: Score) => {
    if (score.baseScore < 0 || score.multiplier < 0) {
      return;
    }
    const newNationScore = {
      ...nationScore,
      [category]: score,
    };
    setDoc(doc(scoreCollection, nation), { score: newNationScore }).then();
  };

  const nationTotalScore = Object.values(nationScore).reduce((acc, score) => {
    return acc + score.baseScore * score.multiplier;
  }, 0);

  return { nationScore, nationTotalScore, setCategoryScore };
};
