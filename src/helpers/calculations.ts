import { UPDATE_SPEED } from "../constants";

export const calculateUpgradeCost = (
  startingCost: number,
  costFactor: number,
  level: number
): number => startingCost * Math.pow(costFactor, level);

export const calculateMaxUpgradeLevel = (
  startingCost: number,
  costFactor: number,
  level: number,
  ticks: number
): number => {
  const cost: number = calculateUpgradeCost(
    startingCost,
    costFactor,
    level + 1
  );
  console.log(cost, cost > ticks);
  if (cost > ticks) {
    return level;
  }
  return calculateMaxUpgradeLevel(startingCost, costFactor, level + 1, ticks);
};

export const calculateIncrement = (generators: GeneratorInfo[]): number =>
  generators.reduce(
    (acc: number, curr: GeneratorInfo) =>
      acc + curr.income / (1000 / UPDATE_SPEED),
    0
  );

export const calculateBonusFactor = (
  level: number,
  bonus: BonusInfo[]
): number => bonus.filter((element) => element.level <= level)[0]?.bonus;

export const calculateIncome = (
  baseIncome: number,
  level: number,
  bonusFactor: number
): number => bonusFactor * baseIncome * level;

export const calculateIdleIncome = (state: GameConfig): GameConfig => {
  const currentDate: number = +new Date();
  const timePassed: number = currentDate - state.savedAt;
  const ticksCount: number = timePassed / UPDATE_SPEED;
  const totalCapacity: number = calculateIncrement(state.generators);

  return {
    ...state,
    ticks: state.ticks + ticksCount * totalCapacity,
  };
};
