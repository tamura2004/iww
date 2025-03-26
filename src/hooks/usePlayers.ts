import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase.ts";
import {Nation} from "../models/Nation.ts";

export const usePlayers = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(3);
  const [selectablePlayers, setSelectablePlayers] = useState<string[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);
  const [selectedPlayerNations, setSelectedPlayerNations] = useState<(Nation | null)[]>([]);

  useEffect(() => {
    getDoc(doc(db, "players", "players")).then((querySnapshot) => {
      setSelectablePlayers(querySnapshot.data()?.names ?? []);
    });
  }, []);

  const handleChangeNumOfPlayers = (num: number) => {
    setNumberOfPlayers(num);
    setSelectedPlayers(Array(num).fill(""));
    setSelectedPlayerNations(Array(num).fill(null));
  }

  const handlePlayerChange = (index: number) => (name: string) => {
    const newSelectedPlayers = [...selectedPlayers];
    newSelectedPlayers[index] = name;
    setSelectedPlayers(newSelectedPlayers);
  }

  const handleNationChange = (index: number) => (nation: Nation | null) => {
    const newSelectedPlayerNations = [...selectedPlayerNations];
    newSelectedPlayerNations[index] = nation;
    setSelectedPlayerNations(newSelectedPlayerNations);
  }

  const isValid = selectedPlayers.every((name) => name.length > 0) &&
    selectedPlayerNations.every((nation) => nation !== null) &&
    new Set(selectedPlayerNations).size === numberOfPlayers &&
    new Set(selectedPlayers).size === numberOfPlayers;

  return {
    numberOfPlayers,
    handleChangeNumOfPlayers,
    selectablePlayers,
    selectedPlayers,
    selectedPlayerNations,
    handlePlayerChange,
    handleNationChange,
    isValid,
  };
};
