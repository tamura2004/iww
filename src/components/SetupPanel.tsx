import TabPanel from "@mui/lab/TabPanel";
import {
  Autocomplete,
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const SetupPanel = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(3);
  return (
    <TabPanel value="設定" sx={{ padding: 0 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4, margin: 4 }}>
        <Button
          variant="contained"
          sx={{
            fontSize: { sm: "3vh", xs: "2.5vh" },
          }}
          disabled={false}
        >
          新しいゲームを開始する
        </Button>
        <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
          <Typography
            sx={{ fontSize: { sm: "3vh", xs: "2.5vh" } }}
            id="number-of-players"
          >
            プレイヤー数
          </Typography>
          <Select
            variant={"standard"}
            labelId="number-of-players"
            id="number-of-players"
            value={numberOfPlayers}
            label={"プレイヤー数"}
            onChange={(e) => {
              setNumberOfPlayers(e.target.value as number);
            }}
            sx={{ fontSize: { sm: "3vh", xs: "2.5vh" } }}
          >
            {[...Array(7)].map((_, i) => (
              <MenuItem
                sx={{ fontSize: { sm: "3vh", xs: "2.5vh" } }}
                value={i + 1}
              >
                {i + 1}人
              </MenuItem>
            ))}
          </Select>
        </Box>
        {[...Array(numberOfPlayers)].map((_, i) => (
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <Box
              key={i}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <AccountCircleIcon sx={{ fontSize: 48 }} />
              プレイヤー{i + 1}
            </Box>
            <Autocomplete
              options={["alice", "bob"]}
              sx={{ width: "30%" }}
              renderInput={(params) => <TextField {...params} label="名前" />}
            />
            <Autocomplete
              options={["north america", "aztec", "asia"]}
              sx={{ width: "50%" }}
              renderInput={(params) => <TextField {...params} label="帝国" />}
            />
          </Box>
        ))}
      </Box>
    </TabPanel>
  );
};
