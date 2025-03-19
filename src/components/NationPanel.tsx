import { Category } from "../models/Category.ts";
import { Nation } from "../models/Nation.ts";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/material";
import { TotalScorePanel } from "./TotalScorePanel.tsx";
import { FixedScorePanel } from "./FixedScorePanel.tsx";
import { MultipliedScorePanel } from "./MultipliedScorePanel.tsx";
import { Score } from "../hooks/useWorldScore.ts";

type Props = {
  nation: Nation;
  setNationCategoryScore: (
    nation: Nation,
    category: Category,
    score: Score,
  ) => void;
  getNationTotalScore: (nation: Nation) => number;
  getNationScore: (nation: Nation) => Record<Category, Score>;
};

export const NationPanel = ({
  nation,
  setNationCategoryScore,
  getNationTotalScore,
  getNationScore,
}: Props) => {
  const totalScore = getNationTotalScore(nation);
  const setCategoryScore = (category: Category, score: Score) =>
    setNationCategoryScore(nation, category, score);
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
              totalScore={totalScore}
              nation={nation}
            />
          ) : category === Category.Fix ? (
            <FixedScorePanel
              key={category}
              nation={nation}
              category={category}
              score={getNationScore(nation)[category]}
              setCategoryScore={setCategoryScore}
            />
          ) : (
            <MultipliedScorePanel
              key={category}
              nation={nation}
              category={category}
              score={getNationScore(nation)[category]}
              setCategoryScore={setCategoryScore}
            />
          ),
        )}
      </Box>
    </TabPanel>
  );
};
