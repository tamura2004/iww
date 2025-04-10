export const Category = {
  General: "将軍",
  Investor: "投資家",
  White: "白：工業",
  Black: "黒：軍事",
  Yellow: "黄：商業",
  Green: "緑：研究",
  Blue: "青：探検",
  Pair: "ペア",
  Fix: "固定点",
  Total: "総得点",
} as const;
export type Category = (typeof Category)[keyof typeof Category];
