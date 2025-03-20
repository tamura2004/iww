import { ReactNode } from "react";
import { Box } from "@mui/material";

type Props = {
  children: ReactNode;
};

export const LabelS = ({ children }: Props) => {
  return (
    <Box
      sx={{
        typography: "h5",
        fontWeight: "bold",
        fontSize: { sm: "2.5vh", xs: "2vh" },
      }}
    >
      {children}
    </Box>
  );
};
