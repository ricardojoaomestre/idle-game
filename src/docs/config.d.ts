type GeneratorStats = {
  baseIncome: number;
  startingCost: number;
  costFactor: number;
};

type GeneratorInfo = GeneratorStats & {
  level: number;
  income: number;
  upgradeCost: number;
  bonusFactor: number;
};

type GameConfig = {
  ticks: number;
  generators: GeneratorInfo[];
  market: GeneratorStats[];
  savedAt?: number;
};
