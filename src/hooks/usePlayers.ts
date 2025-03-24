import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase.ts";

export const usePlayers = () => {
  const [players, setPlayers] = useState<string[]>([]);

  useEffect(() => {
    getDoc(doc(db, "players", "players")).then((querySnapshot) => {
      setPlayers(querySnapshot.data()?.names ?? []);
    });
  }, []);

  return { players };
};
