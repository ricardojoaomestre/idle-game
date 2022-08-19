// @ts-nocheck
import { useContext } from "react";
import { GameContext } from "../context/gameContext";

const useGameContext = () => {
  const ctx = useContext(GameContext);
  const { state, dispatch } = ctx;

  return [state, dispatch];
};

export default useGameContext;
