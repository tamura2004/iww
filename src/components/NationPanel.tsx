import { Category } from "../models/Category.ts";
import { Nation } from "../models/Nation.ts";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/material";
import { TotalScorePanel } from "./TotalScorePanel.tsx";
import { FixedScorePanel } from "./FixedScorePanel.tsx";
import { MultipliedScorePanel } from "./MultipliedScorePanel.tsx";

type Props = {
  nation: Nation;
  nationScore: Record<Category, number>;
  setNationCategoryScore: (
    nation: Nation,
    category: Category,
    score: number,
  ) => void;
};

export const NationPanel = ({
  nation,
  nationScore,
  setNationCategoryScore,
}: Props) => {
  const totalScore = Object.values(nationScore).reduce(
    (acc, score) => acc + score,
    0,
  );
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
            />
          ) : category === Category.Fix ? (
            <FixedScorePanel
              category={category}
              setCategoryScore={setCategoryScore}
            />
          ) : (
            <MultipliedScorePanel
              key={category}
              category={category}
              setCategoryScore={setCategoryScore}
            />
          ),
        )}
      </Box>
    </TabPanel>
  );
};
