import { useContext } from "react";
import { GameContext } from "../context/gameContext";

const useGameContext = () => {
  const ctx: GameContextType = useContext(GameContext);
  const { state, dispatch } = ctx;

  return [state, dispatch] as const;
};

export default useGameContext;
