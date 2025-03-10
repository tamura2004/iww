import { Typography } from "@mui/material";

export const Operator = {
  plus: "+",
  minus: "-",
} as const;
export type Operator = (typeof Operator)[keyof typeof Operator];

type Props = {
  operator: Operator;
};

export const ScoreNumberOperator = ({ operator }: Props) => {
  return (
    <Typography
      variant="h5"
      sx={{
        fontWeight: "bold",
        fontSize: { sm: "3vh", xs: "2vh" },
      }}
    >
      {operator}
    </Typography>
  );
};
