import {
  calculateBonusFactor,
  calculateIncome,
  calculateIncrement,
  calculateUpgradeCost,
} from "../helpers/calculations";

export const tick = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        ticks: state.ticks + calculateIncrement(state.generator.income),
      };
    case "upgrade":
      const { ticks, generator, bonus } = state;
      const { upgradeCost, level, startingCost, costFactor, baseIncome } =
        generator;
      let cost = upgradeCost;
      let nextLevel = level + 1;
      if (action.payload && action.payload > level) {
        cost = calculateUpgradeCost(startingCost, costFactor, action.payload);
        nextLevel = action.payload;
      }
      const nextBonusFactor = calculateBonusFactor(nextLevel, bonus);
      return {
        ...state,
        ticks: ticks - cost,
        generator: {
          ...state.generator,
          level: nextLevel,
          upgradeCost: calculateUpgradeCost(
            startingCost,
            costFactor,
            nextLevel
          ),
          bonusFactor: nextBonusFactor,
          income: calculateIncome(
            baseIncome,
            nextLevel,
            nextBonusFactor,
            bonus
          ),
        },
      };
    default:
      throw new Error("Action not available");
  }
};
