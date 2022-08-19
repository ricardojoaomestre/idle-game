// @ts-nocheck
import React from "react";
import { calculateUpgradeCost } from "../helpers/calculations";
import { integer } from "../helpers/format";

const BuyGeneratorButton = ({ ticks, nextGeneratorIndex, market, onClick }) => {
  if (market.length - 1 < nextGeneratorIndex) return null;
  const nextGenerator = market[nextGeneratorIndex];

  const { startingCost, costFactor } = nextGenerator;
  const nextGeneratorCost = calculateUpgradeCost(startingCost, costFactor, 1);

  return (
    <div>
      <button disabled={ticks < nextGeneratorCost} onClick={onClick}>
        Buy new Generator (cost: {integer(nextGeneratorCost)})
      </button>
    </div>
  );
};

export default BuyGeneratorButton;
