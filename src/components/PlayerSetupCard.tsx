import { Autocomplete, Box, TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Nation } from "../models/Nation.ts";

type Props = {
  name: string;
  handleChangePlayerName: (name: string) => void;
  handleChangeNation: (nation: Nation) => void;
  players: string[];
};

export const PlayerSetupCard = ({
  name,
  handleChangePlayerName,
  handleChangeNation,
  players,
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AccountCircleIcon sx={{ fontSize: 48 }} />
        {name}
      </Box>
      <Autocomplete
        options={players}
        sx={{ width: "30%" }}
        onChange={(_, value) => {
          if (value == null) return;
          console.log({
            type: "DEBUG",
            name: value,
          });
          handleChangePlayerName(value);
        }}
        renderInput={(params) => <TextField label="名前" {...params} />}
      />
      <Autocomplete
        options={Object.values(Nation)}
        sx={{ width: "50%" }}
        onChange={(_, value) => {
          if (value == null) return;
          handleChangeNation(value);
        }}
        renderInput={(params) => <TextField label="帝国" {...params} />}
      />
    </Box>
  );
};
