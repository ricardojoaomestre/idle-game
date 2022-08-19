// @ts-nocheck
import { createContext, useReducer } from "react";

export const GameContext = createContext();

export const GameContextProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
