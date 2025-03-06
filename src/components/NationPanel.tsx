import { Category } from "../models/Category.ts";
import { Nation } from "../models/Nation.ts";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/material";
import { TotalScorePanel } from "./TotalScorePanel.tsx";
import { FixedScorePanel } from "./FixedScorePanel.tsx";
import { MultipliedScorePanel } from "./MultipliedScorePanel.tsx";

type Props = {
  nation: Nation;
  setNationCategoryScore: (
    nation: Nation,
    category: Category,
    score: number,
  ) => void;
  getNationTotalScore: (nation: Nation) => number;
};

export const NationPanel = ({
  nation,
  setNationCategoryScore,
  getNationTotalScore
}: Props) => {
  const totalScore = getNationTotalScore(nation);
  const setCategoryScore = (category: Category, score: number) =>
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
              label={category + "：" + nation}
              totalScore={totalScore}
              nation={nation}
            />
          ) : category === Category.Fix ? (
            <FixedScorePanel
              category={category}
              setCategoryScore={setCategoryScore}
              nation={nation}
            />
          ) : (
            <MultipliedScorePanel
              key={category}
              category={category}
              setCategoryScore={setCategoryScore}
              nation={nation}
            />
          ),
        )}
      </Box>
    </TabPanel>
  );
};
