import { Nation } from "../models/Nation.ts";
import { db } from "../firebase.ts";
import { addDoc, collection } from "firebase/firestore";

export type Achievement = {
  nation: Nation;
  player: string;
  score: number;
};

export const useRecordAchievement = () => {
  const recordAchievement = (achievements: Achievement[]) => {
    addDoc(collection(db, "achievements"), {
      gameDate: new Date(),
      achievements,
    }).then();
  };

  return { recordAchievement };
};
