import React, { useEffect } from "react";
import { UPDATE_SPEED } from "../constants";
import useGameContext from "../hooks/useGameContext";
import Game from "./Game";

const Engine = () => {
  const [, dispatch] = useGameContext();

  useEffect(() => {
    const ticker = setInterval(() => {
      dispatch({ type: "increment" });
    }, UPDATE_SPEED);
    return () => clearInterval(ticker);
  }, []);

  return (
    <>
      <Game />
    </>
  );
};

export default Engine;
