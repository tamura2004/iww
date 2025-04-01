import {PlayerRecord} from "../hooks/useGameRecord.ts";
import {Box, Divider, Typography} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type Props = {
  playerRecords: PlayerRecord[];
}

export const LastGameRecordCard = ({playerRecords}: Props) => {
  return (
    <Box>
      <Divider sx={{ marginTop: 2, marginBottom: 1 }}/>
      <Typography typography="h6">前回ゲームスコア</Typography>
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
                <Typography variant="caption">{playerRecord.nation}</Typography>
                <Typography>{playerRecord.player}</Typography>
                <Typography>{playerRecord.score}点</Typography>
              </Box>
            );
          })}
      </Box>
    </Box>
  )
}