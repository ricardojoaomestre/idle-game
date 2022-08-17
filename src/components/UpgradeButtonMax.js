import React from "react";
import {
  calculateMaxUpgradeLevel,
  calculateUpgradeCost,
} from "../helpers/calculations";
import UpgradeButton from "./UpgradeButton";

const UpgradeButtonMax = ({ ticks, generator, onClick }) => {
  const { startingCost, costFactor, level } = generator;
  const nextLevel = calculateMaxUpgradeLevel(
    startingCost,
    costFactor,
    level,
    ticks
  );
  const cost =
    nextLevel === level
      ? generator.upgradeCost
      : calculateUpgradeCost(startingCost, costFactor, nextLevel);

  return (
    <UpgradeButton
      ticks={ticks}
      cost={cost}
      nextLevel={nextLevel === level ? nextLevel + 1 : nextLevel}
      onClick={() => onClick(nextLevel)}
    />
  );
};

export default UpgradeButtonMax;
