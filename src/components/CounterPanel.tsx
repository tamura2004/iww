import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/material";
import { blue, green, yellow, grey } from "@mui/material/colors";
import { useState } from "react";
import {LabelM} from "./LabelM.tsx";

export const CounterPanel = () => {
  return (
    <TabPanel value="メモ" sx={{ padding: 1 }}>
      <Box sx={{ display: "flex", flexDirection: "column", m: 2, gap: 1 }}>
        <LabelM>算出資源</LabelM>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <Number color={grey[300]} />
          <Number color={grey[800]} />
          <Number color={green[300]} />
          <Number color={yellow[700]} />
          <Number color={blue[300]} />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", m: 2, gap: 1 }}>
        <LabelM>必要資源</LabelM>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <Number color={grey[300]} />
          <Number color={grey[800]} />
          <Number color={green[300]} />
          <Number color={yellow[700]} />
          <Number color={blue[300]} />
        </Box>
      </Box>
    </TabPanel>
  );
};

const Number = ({ color }: { color: string }) => {
  const [counter, setCounter] = useState(0);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { top, height } = event.currentTarget.getBoundingClientRect();
    const clickY = event.clientY - top;
    if (clickY < height / 2) {
      setCounter(counter + 1);
    } else if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <Box
      sx={{
        height: "20vw",
        width: "18%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        typography: "h1",
        fontWeight: "bold",
        fontSize: "12vw",
        bgcolor: color,
        borderRadius: 2,
        p: 1,
        touchAction: "none",
      }}
      onClick={handleClick}
    >
      {counter}
    </Box>
  );
};
