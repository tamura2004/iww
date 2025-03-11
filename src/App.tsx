import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Nation } from "./models/Nation.ts";
import { NationPanel } from "./components/NationPanel.tsx";
import { RankingPanel } from "./components/RankingPanel.tsx";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const [nation, setNation] = useState(Nation.Aztec);
  const tabKeys = [...Object.values(Nation), "順位"];
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
        {Object.values(Nation).map((nation) => (
          <NationPanel
            key={nation}
            nation={nation}
          />
        ))}
        <RankingPanel/>
      </TabContext>
    </ThemeProvider>
  );
}
