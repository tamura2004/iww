import {Category} from "../models/Category.ts";
import {Nation} from "../models/Nation.ts";
import {useState} from "react";
import TabPanel from "@mui/lab/TabPanel";
import {Box} from "@mui/material";
import {TotalScorePanel} from "./TotalScorePanel.tsx";
import {FixedScorePanel} from "./FixedScorePanel.tsx";
import {MultipliedScorePanel} from "./MultipliedScorePanel.tsx";

const initialScore: Record<Category, number> = Object.values(Category).reduce(
  (acc, category) => {
    acc[category] = 0;
    return acc;
  },
  {} as Record<Category, number>,
);

export const NationPanel = ({ nation }: { nation: Nation }) => {
  const [score, setScore] = useState(initialScore);
  const totalScore = Object.values(score).reduce((acc, s) => {
    return acc + s;
  }, 0);
  const handleUpdateScore = (category: Category, value: number) =>
    setScore({
      ...score,
      [category]: value,
    });

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
            />
          ) : category === Category.Fix ? (
            <FixedScorePanel
              category={category}
              handleUpdateScore={handleUpdateScore}
            />
          ) : (
            <MultipliedScorePanel
              key={category}
              category={category}
              handleUpdateScore={handleUpdateScore}
            />
          ),
        )}
      </Box>
    </TabPanel>
  );
};
