import { UPDATE_SPEED } from "../constants";

export const calculateUpgradeCost = (startingCost, costFactor, level) =>
  startingCost * Math.pow(costFactor, level);

export const calculateMaxUpgradeLevel = (
  startingCost,
  costFactor,
  level,
  ticks
) => {
  const cost = calculateUpgradeCost(startingCost, costFactor, level + 1);
  if (cost > ticks) {
    return level;
  }
  return calculateMaxUpgradeLevel(startingCost, costFactor, level + 1, ticks);
};

export const calculateIncrement = (income) => income / (1000 / UPDATE_SPEED);

export const calculateIncome = (baseIncome, level) => baseIncome * level;
