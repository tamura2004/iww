import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import { Nation, NationColor } from "../models/Nation.ts";

export const BasePanel = ({
  children,
  onClick,
  nation,
}: {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  nation: Nation;
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        p: 2,
        m: 1,
        width: "47%",
        height: "22vh",
        bgcolor: NationColor[nation],
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
