import { Nation, NationColor } from "../models/Nation.ts";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Button } from "@mui/material";

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
              height: "16vh",
              bgcolor: NationColor[nation as Nation],
              borderRadius: 2,
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                typography: "h3",
                fontWeight: "bold",
                fontSize: { sm: "5vh", xs: "3vh" },
              }}
            >
              {index + 1}位
            </Box>
            <Box
              sx={{
                typography: "h3",
                fontWeight: "bold",
                fontSize: { sm: "5vh", xs: "3vh" },
              }}
            >
              {nation}
            </Box>
            <Box
              sx={{
                typography: "h2",
                fontWeight: "bold",
                fontSize: { sm: "5vh", xs: "3vh" },
              }}
            >
              {score}点
            </Box>
          </Box>
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
