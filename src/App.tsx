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

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const [nation, setnation] = useState(Nation.NorthAmerica);
  const { worldScore, setNationCategoryScore } = useWorldScore();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <TabContext value={nation}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={(_e, newValue) => setnation(newValue)}>
            {Object.values(Nation).map((nation) => (
              <Tab key={nation} label={nation} value={nation} />
            ))}
          </TabList>
        </Box>
        {Object.values(Nation).map((nation) => (
          <NationPanel
            key={nation}
            nation={nation}
            nationScore={worldScore[nation]}
            setNationCategoryScore={setNationCategoryScore}
          />
        ))}
      </TabContext>
    </ThemeProvider>
  );
}
