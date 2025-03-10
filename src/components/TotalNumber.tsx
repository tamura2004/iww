import { Typography } from "@mui/material";

type Props = {
  value: number;
};

export const TotalNumber = ({ value }: Props) => {
  return (
    <Typography
      variant="h5"
      sx={{
        position: "absolute",
        bottom: 12,
        right: 12,
        verticalAlign: "bottom",
        fontWeight: "bold",
        fontSize: { sm: "3vh", xs: "2vh" },
      }}
    >
      {value}
    </Typography>
  );
};
