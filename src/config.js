export const initialState = {
  ticks: 5,
  generators: [],
  /*{
    baseIncome: 1.67,
    startingCost: 3.738,
    costFactor: 1.07,
    level: 1,
    income: 1.67,
    upgradeCost: 4.28,
    bonusFactor: 1,
  },
  */
};

export const generatorMarket = [
  {
    baseIncome: 1.67,
    startingCost: 3.738,
    costFactor: 1.07,
  },
  {
    baseIncome: 20,
    startingCost: 60,
    costFactor: 1.15,
  },
];

export const bonus = {
  1: 1,
  25: 2,
  50: 4,
  100: 6,
  200: 8,
  300: 10,
  400: 12,
  500: 14,
  600: 16,
  1000: 32,
};

const config = {
  ...initialState,
  bonus,
  generatorMarket,
};

export default config;
