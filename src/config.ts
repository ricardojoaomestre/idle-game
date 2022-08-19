export const market: GeneratorStats[] = [
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

const config: GameConfig = {
  ticks: 5,
  generators: [],
  market,
};

export default config;
