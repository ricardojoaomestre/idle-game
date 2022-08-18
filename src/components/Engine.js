import React, { useEffect } from "react";
import { SAVE_LOOP, UPDATE_SPEED } from "../constants";
import useGameContext from "../hooks/useGameContext";
import Game from "./Game";

const Engine = () => {
  const [, dispatch] = useGameContext();

  useEffect(() => {
    const ticker = setInterval(() => {
      dispatch({ type: "increment" });
    }, UPDATE_SPEED);

    return () => clearInterval(ticker);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const saviour = setInterval(() => {
      dispatch({ type: "saveGame" });
    }, SAVE_LOOP);
    return () => clearInterval(saviour);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Game />
    </>
  );
};

export default Engine;
