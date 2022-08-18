import React from "react";
import { calculateUpgradeCost } from "../helpers/calculations";
import { interger } from "../helpers/format";

const BuyGeneratorButton = ({ ticks, nextGeneratorIndex, market, onClick }) => {
  if (market.length - 1 < nextGeneratorIndex) return;
  const nextGenerator = market[nextGeneratorIndex];

  const { startingCost, costFactor } = nextGenerator;
  const nextGeneratorCost = calculateUpgradeCost(startingCost, costFactor, 1);

  return (
    <div>
      <button disabled={ticks < nextGeneratorCost} onClick={onClick}>
        Buy new Generator (cost: {interger(nextGeneratorCost)})
      </button>
    </div>
  );
};

export default BuyGeneratorButton;
