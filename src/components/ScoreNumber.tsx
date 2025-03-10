import { Box } from "@mui/material";
import { Operator, ScoreNumberOperator } from "./ScoreNumberOperator.tsx";

type Props = {
  score: number;
  withOperator?: boolean;
};

export const ScoreNumber = ({ score, withOperator }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          typography: "h1",
          fontWeight: "bold",
          fontSize: { sm: "12vh", xs: "8vh" },
        }}
      >
        {score}
      </Box>
      {withOperator && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <ScoreNumberOperator operator={Operator.plus} />
          <ScoreNumberOperator operator={Operator.minus} />
        </Box>
      )}
    </Box>
  );
};
