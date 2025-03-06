import { Box, Typography } from "@mui/material";
import { BasePanel } from "./BasePanel.tsx";
import { Nation } from "../models/Nation.ts";

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
      <Box
        sx={{
          typography: "h1",
          fontWeight: "bold",
          fontSize: { sm: "12vh", xs: "8vh" },
        }}
      >
        {totalScore}
      </Box>
    </BasePanel>
  );
};
