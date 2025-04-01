import TabPanel from "@mui/lab/TabPanel";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Typography,
  Divider,
} from "@mui/material";
import { PlayerSetupCard } from "./PlayerSetupCard.tsx";
import { Nation } from "../models/Nation.ts";
import { useGameRecord } from "../hooks/useGameRecord.ts";
import { GameRecordCard } from "./GameRecordCard.tsx";
import { LastGameRecordCard } from "./LastGameRecordCard.tsx";

type Props = {
  getNationTotalScore: (nation: Nation) => number;
  numberOfPlayers: number;
  handleChangeNumOfPlayers: (index: number) => void;
  selectablePlayers: string[];
  selectedPlayers: string[];
  selectedPlayerNations: (Nation | null)[];
  handlePlayerChange: (index: number) => (name: string) => void;
  handleNationChange: (index: number) => (nation: Nation | null) => void;
  isValid: boolean;
};

export const GameRecordPanel = ({
  getNationTotalScore,
  numberOfPlayers,
  handleChangeNumOfPlayers,
  selectablePlayers,
  selectedPlayers,
  selectedPlayerNations,
  handlePlayerChange,
  handleNationChange,
  isValid,
}: Props) => {
  const { addGameRecord, gameRecordsSortByGameDate, lastGameRecords } =
    useGameRecord();

  const handleAddGameRecord = () => {
    const playerRecords = selectedPlayerNations.map((nation, index) => {
      return {
        nation: nation as Nation,
        player: selectedPlayers[index],
        score: getNationTotalScore(nation as Nation),
      };
    });
    addGameRecord(playerRecords);
  };

  return (
    <TabPanel value="戦績" sx={{ padding: 0 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4, margin: 4 }}>
        <Button
          variant="contained"
          sx={{
            fontSize: { sm: "3vh", xs: "2.5vh" },
          }}
          disabled={!isValid}
          onClick={handleAddGameRecord}
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
              handleChangeNumOfPlayers(e.target.value as number);
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
            handleChangePlayerName={handlePlayerChange(i)}
            handleChangeNation={handleNationChange(i)}
            players={selectablePlayers}
            selectedPlayer={selectedPlayers[i]}
            selectedNation={selectedPlayerNations[i]}
          />
        ))}
        <Divider />
        <Box>
          <LastGameRecordCard playerRecords={lastGameRecords} />
        </Box>
        <Divider />
        <Box>
          <Typography typography="h5">過去の戦績</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {gameRecordsSortByGameDate.map((gameRecord, index) => {
              return <GameRecordCard gameRecord={gameRecord} key={index} />;
            })}
          </Box>
        </Box>
      </Box>
    </TabPanel>
  );
};
