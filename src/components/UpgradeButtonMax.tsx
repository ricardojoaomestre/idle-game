import React from "react";
import {
  calculateMaxUpgradeLevel,
  calculateUpgradeCost,
} from "../helpers/calculations";
import UpgradeButton from "./UpgradeButton";

const UpgradeButtonMax = ({
  ticks,
  generator,
  onClick,
}: {
  ticks: number;
  generator: GeneratorInfo;
  onClick: (nextLevel: number) => void;
}) => {
  const { startingCost, costFactor, level } = generator;
  const nextLevel: number = calculateMaxUpgradeLevel(
    startingCost,
    costFactor,
    level,
    ticks
  );
  const cost: number =
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
