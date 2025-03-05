export const Nation = {
  NorthAmerica: "北アメリカ王国",
  Aztec: "アステカ王国",
  Asia: "アジア連邦",
  Europe: "ヨーロッパ共和国",
  Africa: "パンアフリカ連合",
} as const;
export type Nation = (typeof Nation)[keyof typeof Nation];
