import { Category } from "../models/Category.ts";
import { Nation } from "../models/Nation.ts";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/material";
import { TotalScorePanel } from "./TotalScorePanel.tsx";
import { FixedScorePanel } from "./FixedScorePanel.tsx";
import { MultipliedScorePanel } from "./MultipliedScorePanel.tsx";
import { useNationScore } from "../hooks/useNationScore.ts";

type Props = {
  nation: Nation;
};

export const NationPanel = ({ nation }: Props) => {
  const { nationScore, nationTotalScore, setCategoryScore } =
    useNationScore(nation);
  return (
    <TabPanel value={nation} sx={{ padding: 0 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "90vh",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {Object.values(Category).map((category) =>
          category === Category.Total ? (
            <TotalScorePanel
              key={category}
              label={category}
              totalScore={nationTotalScore}
              nation={nation}
            />
          ) : category === Category.Fix ? (
            <FixedScorePanel
              nation={nation}
              category={category}
              score={nationScore[category]}
              setCategoryScore={setCategoryScore}
            />
          ) : (
            <MultipliedScorePanel
              key={category}
              nation={nation}
              category={category}
              score={nationScore[category]}
              setCategoryScore={setCategoryScore}
            />
          ),
        )}
      </Box>
    </TabPanel>
  );
};
