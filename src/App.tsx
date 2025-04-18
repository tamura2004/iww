import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Nation } from "./models/Nation.ts";
import { NationPanel } from "./components/NationPanel.tsx";
import { useWorldScore } from "./hooks/useWorldScore.ts";
import { RankingPanel } from "./components/RankingPanel.tsx";
import { GameRecordPanel } from "./components/GameRecordPanel.tsx";
import { usePlayers } from "./hooks/usePlayers.ts";
import {CounterPanel} from "./components/CounterPanel.tsx";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const [nation, setNation] = useState(Nation.Aztec);
  const {
    setNationCategoryScore,
    getNationScore,
    getNationTotalScore,
    resetWorldScore,
  } = useWorldScore();
  const {
    isValid,
    numberOfPlayers,
    handleChangeNumOfPlayers,
    selectablePlayers,
    selectedPlayers,
    selectedPlayerNations,
    handlePlayerChange,
    handleNationChange,
  } = usePlayers();
  const tabKeys = ["メモ", "戦績", ...Object.values(Nation), "順位"];
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <TabContext value={nation}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            variant="scrollable"
            onChange={(_e, newValue) => setNation(newValue)}
          >
            {tabKeys.map((nation) => (
              <Tab key={nation} label={nation} value={nation} />
            ))}
          </TabList>
        </Box>
        <CounterPanel />
        <GameRecordPanel
          getNationTotalScore={getNationTotalScore}
          numberOfPlayers={numberOfPlayers}
          handleChangeNumOfPlayers={handleChangeNumOfPlayers}
          selectablePlayers={selectablePlayers}
          selectedPlayers={selectedPlayers}
          selectedPlayerNations={selectedPlayerNations}
          handlePlayerChange={handlePlayerChange}
          handleNationChange={handleNationChange}
          isValid={isValid}
        />
        {Object.values(Nation).map((nation) => (
          <NationPanel
            key={nation}
            nation={nation}
            setNationCategoryScore={setNationCategoryScore}
            getNationTotalScore={getNationTotalScore}
            getNationScore={getNationScore}
          />
        ))}
        <RankingPanel
          getNationTotalScore={getNationTotalScore}
          resetWorldScore={resetWorldScore}
        />
      </TabContext>
    </ThemeProvider>
  );
}
