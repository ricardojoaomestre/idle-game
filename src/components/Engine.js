import React, { useReducer, useEffect } from "react";
import { UPDATE_SPEED } from "../constants";
import DisplayData from "./DisplayData";
import { tick } from "../reducers/engine";

const Engine = () => {
  const initialState = {
    ticks: 0,
    factor: 1,
  };

  const [state, dispatch] = useReducer(tick, initialState);
  const { ticks } = state;

  useEffect(() => {
    const ticker = setInterval(() => {
      dispatch({ type: "increment" });
    }, UPDATE_SPEED);
    return () => clearInterval(ticker);
  }, []);

  return <DisplayData ticks={ticks} />;
};

export default Engine;
