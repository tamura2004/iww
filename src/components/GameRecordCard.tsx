import { GameRecord } from "../hooks/useGameRecord.ts";
import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type Props = {
  gameRecord: GameRecord;
};

export const GameRecordCard = ({ gameRecord }: Props) => {
  const { gameDate, playerRecords } = gameRecord;
  return (
    <Box>
      <Typography typography="h6">{gameDate}</Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        {playerRecords
          .slice()
          .sort((a, b) => b.score - a.score)
          .map((playerRecord, index) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={index}
              >
                <Typography>{index + 1}位</Typography>
                <AccountCircleIcon sx={{ fontSize: 48 }} />
                <Typography>{playerRecord.nation}</Typography>
                <Typography>{playerRecord.player}</Typography>
                <Typography>{playerRecord.score}点</Typography>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};
