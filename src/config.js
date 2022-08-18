export const initialState = {
  ticks: 5,
  generators: [],
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
  {
    baseIncome: 90,
    startingCost: 720,
    costFactor: 1.14,
  },
  {
    baseIncome: 360,
    startingCost: 8640,
    costFactor: 1.13,
  },
  {
    baseIncome: 2160,
    startingCost: 103680,
    costFactor: 1.12,
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
