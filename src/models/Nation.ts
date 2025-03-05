import {blue, green, orange, purple, red} from "@mui/material/colors";

export const Nation = {
  NorthAmerica: "北アメリカ王国",
  Aztec: "アステカ王国",
  Asia: "アジア連邦",
  Europe: "ヨーロッパ共和国",
  Africa: "パンアフリカ連合",
} as const;
export type Nation = (typeof Nation)[keyof typeof Nation];

export const NationColor = {
  [Nation.NorthAmerica]: red[400],
  [Nation.Aztec]: blue[500],
  [Nation.Asia]: orange[500],
  [Nation.Europe]: purple[400],
  [Nation.Africa]: green[500],
} as const;
