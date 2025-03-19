import TabPanel from "@mui/lab/TabPanel";
import {Box, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const SetupPanel = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(3);
  return (
    <TabPanel value="設定" sx={{ padding: 0 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4, margin: 4 }}>
        <Box sx={{ display: "flex", gap: 4 }}>
          <InputLabel sx={{ fontSize: 48 }} id="number-of-players">
            プレイヤー数
          </InputLabel>
          <Select
            variant={"standard"}
            labelId="number-of-players"
            id="number-of-players"
            value={numberOfPlayers}
            label={"プレイヤー数"}
            onChange={(e) => {
              setNumberOfPlayers(e.target.value as number);
            }}
            sx={{ fontSize: 48 }}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <MenuItem sx={{ fontSize: 48 }} value={i}>
                {i}人
              </MenuItem>
            ))}
          </Select>
          <TextField
            variant="standard"
            value={numberOfPlayers}
            onChange={(e) => setNumberOfPlayers(Number(e.target.value))}
            placeholder="カスタム"
            sx={{ fontSize: 48 }}
          />
        </Box>
        {[...Array(numberOfPlayers)].map((_, i) => (
          <Box key={i} sx={{ fontSize: 48 }}>
            <AccountCircleIcon sx={{ fontSize: 48 }} />
            プレイヤー{i + 1}
          </Box>
        ))}
      </Box>
    </TabPanel>
  );
};
