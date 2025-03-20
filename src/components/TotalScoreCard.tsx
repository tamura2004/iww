import { BaseScoreCard } from "./BaseScoreCard.tsx";
import { Nation } from "../models/Nation.ts";
import { ScoreNumber } from "./ScoreNumber.tsx";

type Props = {
  nation: Nation;
  label: string;
  totalScore: number;
};

export const TotalScoreCard = ({ nation, label, totalScore }: Props) => {
  return (
    <BaseScoreCard nation={nation} label={label}>
      <ScoreNumber score={totalScore} />
    </BaseScoreCard>
  );
};
