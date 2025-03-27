import { Nation } from "../models/Nation.ts";
import { db } from "../firebase.ts";
import { addDoc, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

export type PlayerRecord = {
  nation: Nation;
  player: string;
  score: number;
}

export type GameRecord = {
  gameDate: string,
  playerRecords: PlayerRecord[]
}

const gameRecordCollection = collection(db, "gameRecords");

export const useGameRecord = () => {
  const [gameRecords, setGameRecords] = useState<GameRecord[]>([]);

  const addGameRecord = (playerRecords: PlayerRecord[]) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const gameDate = `${year}年${month}月${date}日`;
    addDoc(gameRecordCollection, {
      gameDate,
      playerRecords: playerRecords,
    }).then();
  };

  useEffect(() => {
    const fetchGameRecords = async () => {
      const gameRecordsSnapshot = await getDocs(gameRecordCollection);
      const fetchedGameRecords = gameRecordsSnapshot.docs
        .map((doc) => doc.data() as GameRecord)
      setGameRecords(fetchedGameRecords);
    };
    fetchGameRecords().then();
  }, []);

  return { addGameRecord, gameRecords };
};
