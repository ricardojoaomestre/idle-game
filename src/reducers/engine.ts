import {
  calculateBonusFactor,
  calculateIncome,
  calculateIncrement,
  calculateUpgradeCost,
} from "../helpers/calculations";
import {
  BONUS,
  BUY_GENERATOR_ACTION,
  INCREMENT_ACTION,
  LOAD_GAME_ACTION,
  RESET_ACTION,
  SAVE_GAME_ACTION,
  UPGRADE_ACTION,
} from "../constants";
import { load, reset, save } from "../helpers/localStorage";

function increment(state: GameConfig): GameConfig {
  const increment: number = calculateIncrement(state.generators);
  return {
    ...state,
    ticks: state.ticks + increment,
  };
}

function upgrade(state: GameConfig, action: ActionType): GameConfig {
  // get all data
  const { ticks } = state;

  const { generator, level, idx } = action.payload;
  const { upgradeCost, startingCost, costFactor, baseIncome } = generator;

  // calculate
  const cost: number =
    level === generator.level + 1
      ? upgradeCost
      : calculateUpgradeCost(startingCost, costFactor, level);
  const nextLevel: number = level;
  const nextBonusFactor: number = calculateBonusFactor(nextLevel, BONUS);
  const income: number = calculateIncome(
    baseIncome,
    nextLevel,
    nextBonusFactor
  );
  const upgGenerator: GeneratorInfo = {
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

function buyGenerator(state: GameConfig): GameConfig {
  const { generators, market, ticks } = state;
  const nextGeneratorConfig: GeneratorStats = market[generators?.length || 0];
  const { startingCost, costFactor, baseIncome } = nextGeneratorConfig;

  const nextGeneratorCost: number = calculateUpgradeCost(
    startingCost,
    costFactor,
    1
  );
  if (ticks < nextGeneratorCost) return state;

  const bonusFactor: number = calculateBonusFactor(1, BONUS);
  const newGenerator: GeneratorInfo = {
    ...nextGeneratorConfig,
    level: 1,
    income: calculateIncome(baseIncome, 1, bonusFactor),
    upgradeCost: calculateUpgradeCost(startingCost, costFactor, 2),
    bonusFactor: bonusFactor,
  };

  return {
    ...state,
    ticks: ticks - nextGeneratorCost,
    generators: [...generators, newGenerator],
  };
}

function saveGame(state: GameConfig): GameConfig {
  save(state);
  return state;
}

function loadGame(): GameConfig {
  return load();
}

export const tick = (state: GameConfig, action: ActionType): GameConfig => {
  switch (action.type) {
    case INCREMENT_ACTION:
      return increment(state);
    case UPGRADE_ACTION:
      return upgrade(state, action);
    case BUY_GENERATOR_ACTION:
      return buyGenerator(state);
    case SAVE_GAME_ACTION:
      return saveGame(state);
    case LOAD_GAME_ACTION:
      return loadGame();
    case RESET_ACTION:
      return reset(state);
    default:
      throw new Error("Action not available");
  }
};
