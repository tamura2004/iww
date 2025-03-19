import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import { PlayerSetupCard } from "./PlayerSetupCard.tsx";
import { Nation } from "../models/Nation.ts";

export const SetupPanel = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(5);
  const [playerNames, setPlayerNames] = useState<string[]>(
    [...Array(numberOfPlayers)].map((_, i) => `プレイヤー${i + 1}`),
  );
  const [nations, setNations] = useState<(Nation | null)[]>(
    [...Array(numberOfPlayers)].map(() => null),
  );

  const isValid =
    playerNames.every((name) => name.length > 0) &&
    nations.every((nation) => nation !== null) &&
    new Set(nations).size === numberOfPlayers &&
    new Set(playerNames).size === numberOfPlayers;

  const handlePlayerNameChange = (index: number) => (name: string) => {
    const newPlayerNames = [...playerNames];
    newPlayerNames[index] = name;
    setPlayerNames(newPlayerNames);
  };

  const handleNationChange = (index: number) => (nation: Nation | null) => {
    const newNations = [...nations];
    newNations[index] = nation;
    setNations(newNations);
  };

  return (
    <TabPanel value="設定" sx={{ padding: 0 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4, margin: 4 }}>
        <Button
          variant="contained"
          sx={{
            fontSize: { sm: "3vh", xs: "2.5vh" },
          }}
          disabled={!isValid}
          onClick={() => {
            console.log({
              type: "DEBUG",
              playerNames,
              nations,
            });
          }}
        >
          新しいゲームを開始する
        </Button>
        <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
          <Typography
            sx={{ fontSize: { sm: "3vh", xs: "2.5vh" } }}
            id="number-of-players"
          >
            プレイヤー数
          </Typography>
          <Select
            variant="standard"
            value={numberOfPlayers}
            label={"プレイヤー数"}
            onChange={(e) => {
              setNumberOfPlayers(e.target.value as number);
            }}
            sx={{ fontSize: { sm: "3vh", xs: "2.5vh" } }}
          >
            {[...Array(7)].map((_, i) => (
              <MenuItem
                key={i}
                sx={{ fontSize: { sm: "3vh", xs: "2.5vh" } }}
                value={i + 1}
              >
                {i + 1}人
              </MenuItem>
            ))}
          </Select>
        </Box>
        {[...Array(numberOfPlayers)].map((_, i) => (
          <PlayerSetupCard
            key={i}
            name={`プレイヤー${i + 1}`}
            handleChangePlayerName={handlePlayerNameChange(i)}
            handleChangeNation={handleNationChange(i)}
          />
        ))}
      </Box>
    </TabPanel>
  );
};
