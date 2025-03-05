import {Nation, NationColor} from "../models/Nation.ts";
import { Category } from "../models/Category.ts";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/material";

type Props = {
  worldScore: Record<Nation, Record<Category, number>>;
};

export const RankingPanel = ({ worldScore }: Props) => {
  const ranking = Object.entries(worldScore)
    .map(([nation, nationScore]) => ({
      nation,
      score: Object.values(nationScore).reduce((acc, score) => acc + score, 0),
    }))
    .sort((a, b) => b.score - a.score);

  return (
    <TabPanel value="順位" sx={{ padding: 0 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "90vh",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {ranking.map(({ nation, score }, index) => (
          <Box
            key={nation}
            sx={{
              p: 4,
              m: 1,
              display: "flex",
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
              width: "100%",
              height: "17vh",
              bgcolor: NationColor[nation as Nation],
              borderRadius: 2,
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ typography: "h3", fontWeight: "bold" }}>
              {index + 1}位
            </Box>
            <Box sx={{ typography: "h3", fontWeight: "bold" }}>{nation}</Box>
            <Box sx={{ typography: "h2", fontWeight: "bold" }}>{score}点</Box>
          </Box>
        ))}
      </Box>
    </TabPanel>
  );
};
