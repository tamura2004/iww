import {Category} from "./Category.ts";
import {Nation} from "./Nation.ts";

export type Score = {
  baseScore: number;
  multiplier: number;
};
export type NationScore = Record<Category, Score>;
export type WorldScore = Record<Nation, NationScore>;
export type NationTotalScore = Record<Nation, number>;
