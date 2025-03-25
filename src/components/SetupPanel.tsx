import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import { PlayerSetupCard } from "./PlayerSetupCard.tsx";
import { Nation } from "../models/Nation.ts";
import { usePlayers } from "../hooks/usePlayers.ts";
import { useRecordAchievement } from "../hooks/useRecordAchievement.ts";

type Props = {
  getNationTotalScore: (nation: Nation) => number;
};

export const SetupPanel = ({ getNationTotalScore }: Props) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(3);
  const [playerNames, setPlayerNames] = useState<string[]>(
    [...Array(7)].map((_, i) => `プレイヤー${i + 1}`),
  );
  const [nations, setNations] = useState<(Nation | null)[]>(
    [...Array(7)].map(() => null),
  );
  const { players } = usePlayers();
  const { recordAchievement } = useRecordAchievement();

  const isValid =
    playerNames.slice(0, numberOfPlayers).every((name) => name.length > 0) &&
    nations.slice(0, numberOfPlayers).every((nation) => nation !== null) &&
    new Set(nations.slice(0, numberOfPlayers)).size === numberOfPlayers &&
    new Set(playerNames.slice(0, numberOfPlayers)).size === numberOfPlayers;

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

  const handleRecordAchievement = () => {
    const achievements = nations
      .slice(0, numberOfPlayers)
      .map((nation, index) => {
        return {
          nation: nation as Nation,
          player: playerNames[index],
          score: getNationTotalScore(nation as Nation),
        };
      });
    recordAchievement(achievements);
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
          onClick={handleRecordAchievement}
        >
          戦績を記録する
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
            players={players}
          />
        ))}
      </Box>
    </TabPanel>
  );
};
