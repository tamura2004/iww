import { Box, Typography } from "@mui/material";
import { BasePanel } from "./BasePanel.tsx";

export const TotalScorePanel = ({
  label,
  totalScore,
}: {
  label: string;
  totalScore: number;
}) => {
  return (
    <BasePanel>
      <Typography
        variant="h5"
        sx={{
          position: "absolute",
          top: 12,
          left: 12,
          verticalAlign: "bottom",
          fontWeight: "bold",
        }}
      >
        {label}
      </Typography>
      <Box sx={{ typography: "h1", fontWeight: "bold", fontSize: "12vh" }}>
        {totalScore}
      </Box>
    </BasePanel>
  );
};
