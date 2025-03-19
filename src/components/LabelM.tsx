import { ReactNode } from "react";
import { Box } from "@mui/material";

type Props = {
  children: ReactNode;
};

export const LabelM = ({ children }: Props) => {
  return (
    <Box
      sx={{
        typography: "h3",
        fontWeight: "bold",
        fontSize: { sm: "4vh", xs: "3vh" },
      }}
    >
      {children}
    </Box>
  );
};
