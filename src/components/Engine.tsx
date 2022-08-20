import React, { useEffect } from "react";
import {
  INCREMENT_ACTION,
  SAVE_GAME_ACTION,
  SAVE_LOOP,
  UPDATE_SPEED,
} from "../constants";
import useGameContext from "../hooks/useGameContext";
import Game from "./Game";

const Engine = () => {
  const [, dispatch] = useGameContext();

  useEffect(() => {
    const ticker: NodeJS.Timer = setInterval(() => {
      dispatch({ type: INCREMENT_ACTION });
    }, UPDATE_SPEED);

    return () => clearInterval(ticker);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const saviour: NodeJS.Timer = setInterval(() => {
      dispatch({ type: SAVE_GAME_ACTION });
    }, SAVE_LOOP);
    return () => clearInterval(saviour);
    // eslint-disable-next-line
  }, []);

  return <Game />;
};

export default Engine;
