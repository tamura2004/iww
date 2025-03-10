import { Typography } from "@mui/material";
import { BasePanel } from "./BasePanel.tsx";
import { Nation } from "../models/Nation.ts";
import { ScoreNumber } from "./ScoreNumber.tsx";

type Props = {
  nation: Nation;
  label: string;
  totalScore: number;
};

export const TotalScorePanel = ({ nation, label, totalScore }: Props) => {
  return (
    <BasePanel nation={nation}>
      <Typography
        variant="h5"
        sx={{
          position: "absolute",
          top: 12,
          left: 12,
          verticalAlign: "bottom",
          fontWeight: "bold",
          fontSize: { sm: "3vh", xs: "2.5vh" },
        }}
      >
        {label}
      </Typography>
      <ScoreNumber score={totalScore} />
    </BasePanel>
  );
};
