import { Box } from "@mui/material";
import { Nation, NationColor } from "../models/Nation.ts";
import { LabelM } from "./LabelM.tsx";

type Props = {
  nation: Nation;
  score: number;
  rank: number;
};

export const NationRankingCard = ({ nation, score, rank }: Props) => {
  return (
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
        height: "11vh",
        bgcolor: NationColor[nation as Nation],
        borderRadius: 2,
        justifyContent: "space-between",
      }}
    >
      <LabelM>{rank}位</LabelM>
      <LabelM>{nation}</LabelM>
      <LabelM>{score}点</LabelM>
    </Box>
  );
};
