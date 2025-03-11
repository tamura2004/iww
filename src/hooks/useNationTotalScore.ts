import { Nation } from "../models/Nation.ts";
import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { NationScore, NationTotalScore } from "../models/Score.ts";
import { scoreCollection } from "../firebase.ts";

export const useNationTotalScore = () => {
  const [nationTotalScore, setNationTotalScore] = useState<NationTotalScore>(
    {} as NationTotalScore,
  );

  useEffect(() => {
    onSnapshot(scoreCollection, (snapshot) => {
      const newRanking = snapshot.docs.reduce((acc, doc) => {
        const nation = doc.id as Nation;
        const nationScore = doc.data().score as NationScore;
        const totalScore = Object.values(nationScore).reduce(
          (acc, score) => acc + score.baseScore * score.multiplier,
          0,
        );
        return { ...acc, [nation]: totalScore };
      }, {} as NationTotalScore);
      setNationTotalScore(newRanking);
    });
  });

  return { nationTotalScore };
};
