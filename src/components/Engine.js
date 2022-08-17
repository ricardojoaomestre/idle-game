import React, { useReducer, useEffect } from "react";
import { UPDATE_SPEED } from "../constants";
import DisplayData from "./DisplayData";
import { tick } from "../reducers/engine";
import DisplayGenerator from "./DisplayGenerator";

const Engine = () => {
  const initialState = {
    ticks: 0,
    generator: {
      level: 1,
      factor: 1,
    },
  };

  const [state, dispatch] = useReducer(tick, initialState);
  const { ticks, generator } = state;

  useEffect(() => {
    const ticker = setInterval(() => {
      dispatch({ type: "increment" });
    }, UPDATE_SPEED);
    return () => clearInterval(ticker);
  }, []);

  if (!state?.generator) return <p>loading...</p>;

  return (
    <>
      <DisplayData ticks={ticks} />
      <DisplayGenerator
        info={generator}
        onUpgrade={() => dispatch({ type: "upgrade" })}
      />
    </>
  );
};

export default Engine;
