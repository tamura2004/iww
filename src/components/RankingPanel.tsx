import { Nation } from "../models/Nation.ts";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Button } from "@mui/material";
import { NationRankingCard } from "./NationRankingCard.tsx";

type Props = {
  getNationTotalScore: (nation: Nation) => number;
  resetWorldScore: () => void;
};

export const RankingPanel = ({
  getNationTotalScore,
  resetWorldScore,
}: Props) => {
  const ranking = Object.values(Nation)
    .map((nation) => ({
      nation,
      score: getNationTotalScore(nation),
    }))
    .sort((a, b) => b.score - a.score);

  return (
    <TabPanel value="順位" sx={{ padding: 0 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "90vh",
          justifyContent: "flex-end",
          flexWrap: "wrap",
        }}
      >
        {ranking.map(({ nation, score }, index) => (
          <NationRankingCard
            key={nation}
            nation={nation}
            score={score}
            rank={index + 1}
          />
        ))}
        <Button
          variant="outlined"
          sx={{
            m: 2,
          }}
          onClick={resetWorldScore}
        >
          新しいゲームを開始する
        </Button>
      </Box>
    </TabPanel>
  );
};
