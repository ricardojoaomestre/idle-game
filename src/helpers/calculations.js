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

export const calculateIncrement = (generators) =>
  generators.reduce(
    (acc, curr) => acc + curr.income / (1000 / UPDATE_SPEED),
    0
  );

export const calculateBonusFactor = (level, bonus) => {
  const bonusLevels = Object.keys(bonus);
  const nextMilestones = bonusLevels.filter((l) => l >= level);
  if (nextMilestones.length === 0)
    return bonus[bonusLevels[bonusLevels.length - 1]];
  return bonus[nextMilestones[0]];
};

export const calculateIncome = (baseIncome, level, bonusFactor) =>
  bonusFactor * baseIncome * level;

export const calculateIdleIncome = (state) => {
  const currentDate = +new Date();
  const timePassed = currentDate - state.savedAt;
  const ticksCount = timePassed / UPDATE_SPEED;
  const totalCapacity = calculateIncrement(state.generators);

  return {
    ...state,
    ticks: state.ticks + ticksCount * totalCapacity,
  };
};
