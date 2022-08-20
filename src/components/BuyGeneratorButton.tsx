import React from "react";
import { calculateUpgradeCost } from "../helpers/calculations";
import { integer } from "../helpers/format";

const BuyGeneratorButton = ({
  ticks,
  nextGeneratorIndex,
  market,
  onClick,
}: {
  ticks: number;
  nextGeneratorIndex: number;
  market: GeneratorStats[];
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  if (market.length - 1 < nextGeneratorIndex) return null;
  const nextGenerator: GeneratorStats = market[nextGeneratorIndex];

  const { startingCost, costFactor } = nextGenerator;
  const nextGeneratorCost: number = calculateUpgradeCost(
    startingCost,
    costFactor,
    1
  );

  return (
    <div>
      <button disabled={ticks < nextGeneratorCost} onClick={onClick}>
        Buy new Generator (cost: {integer(nextGeneratorCost)})
      </button>
    </div>
  );
};

export default BuyGeneratorButton;
