import { createContext, useReducer } from "react";

interface IGameContextProvider {
  reducer: (state: GameConfig, action: ActionType) => GameConfig;
  initialState: GameConfig;
  children: React.ReactNode;
}

export const GameContext = createContext<GameContextType | null>(null);

export const GameContextProvider = ({
  reducer,
  initialState,
  children,
}: IGameContextProvider) => {
  const [state, dispatch] = useReducer<
    (state: GameConfig, action: ActionType) => GameConfig,
    GameConfig
  >(reducer, initialState, undefined);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
