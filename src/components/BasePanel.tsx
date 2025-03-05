import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { ReactNode } from "react";

export const BasePanel = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        p: 2,
        m: 1,
        width: "47%",
        height: "22vh",
        bgcolor: blue[500],
        borderRadius: 2,
        touchAction: "none",
        position: "relative",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};
