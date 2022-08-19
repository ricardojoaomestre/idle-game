// @ts-nocheck
import {
  calculateBonusFactor,
  calculateIncome,
  calculateIncrement,
  calculateUpgradeCost,
} from "../helpers/calculations";
import { BONUS } from "../constants";
import { load, save } from "../helpers/localStorage";

function increment(state) {
  const increment = calculateIncrement(state.generators);
  return {
    ...state,
    ticks: state.ticks + increment,
  };
}

function upgrade(state, action) {
  // get all data
  const { ticks } = state;

  const { generator, level, idx } = action.payload;
  const { upgradeCost, startingCost, costFactor, baseIncome } = generator;

  // calculate
  const cost =
    level === generator.level + 1
      ? upgradeCost
      : calculateUpgradeCost(startingCost, costFactor, level);
  const nextLevel = level;
  const nextBonusFactor = calculateBonusFactor(nextLevel, BONUS);
  const income = calculateIncome(baseIncome, nextLevel, nextBonusFactor, BONUS);
  const upgGenerator = {
    ...generator,
    level: nextLevel,
    upgradeCost: cost,
    bonusFactor: nextBonusFactor,
    income: income,
  };

  return {
    ...state,
    ticks: ticks - cost,
    generators: state.generators.map((gen, index) =>
      index === idx ? upgGenerator : gen
    ),
  };
}

function buyGenerator(state) {
  const { generators, market, ticks } = state;
  const nextGeneratorConfig = market[generators?.length || 0];
  const { startingCost, costFactor, baseIncome } = nextGeneratorConfig;

  const nextGeneratorCost = calculateUpgradeCost(startingCost, costFactor, 1);
  if (ticks < nextGeneratorCost) return;

  const bonusFactor = calculateBonusFactor(1, BONUS);
  nextGeneratorConfig.level = 1;
  nextGeneratorConfig.income = calculateIncome(baseIncome, 1, bonusFactor);
  nextGeneratorConfig.upgradeCost = calculateUpgradeCost(
    startingCost,
    costFactor,
    2
  );
  nextGeneratorConfig.bonusFactor = bonusFactor;

  return {
    ...state,
    ticks: ticks - nextGeneratorCost,
    generators: [...generators, nextGeneratorConfig],
  };
}

function saveGame(state) {
  save(state);
  return state;
}

function loadGame() {
  return load();
}

export const tick = (state, action) => {
  switch (action.type) {
    case "increment":
      return increment(state);
    case "upgrade":
      return upgrade(state, action);
    case "buyGenerator":
      return buyGenerator(state);
    case "saveGame":
      return saveGame(state);
    case "loadGame":
      return loadGame();
    default:
      throw new Error("Action not available");
  }
};
