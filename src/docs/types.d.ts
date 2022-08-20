type ActionType = {
  type: string;
  payload?: {
    generator: GeneratorInfo;
    idx: number;
    level: number;
  };
};

type GameContextType = {
  state: GameConfig | null;
  dispatch: React.Dispatch<ActionType>;
};
