import {blue, green, yellow, grey} from "@mui/material/colors";

export const Nation = {
  NorthAmerica: "北アメリカ王国",
  Aztec: "アステカ王国",
  Asia: "アジア連邦",
  Europe: "ヨーロッパ共和国",
  Africa: "パンアフリカ連合",
  Arctic: "北極の覇国",
  Oceania: "オセアニア部族連合",
} as const;
export type Nation = (typeof Nation)[keyof typeof Nation];

export const NationColor = {
  [Nation.NorthAmerica]: yellow[700],
  [Nation.Aztec]: blue[900],
  [Nation.Asia]: yellow[900],
  [Nation.Europe]: blue[700],
  [Nation.Africa]: green[500],
  [Nation.Arctic]: grey[900],
  [Nation.Oceania]: grey[700],
} as const;
