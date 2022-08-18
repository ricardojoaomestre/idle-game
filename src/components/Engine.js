import React, { useReducer, useEffect } from "react";
import { UPDATE_SPEED } from "../constants";
import DisplayData from "./DisplayData";
import { tick } from "../reducers/engine";
import DisplayGenerator from "./DisplayGenerator";
import UpgradeButton from "./UpgradeButton";
import UpgradeButtonMax from "./UpgradeButtonMax";

const Engine = () => {
  const initialState = {
    ticks: 0,
    generator: {
      baseIncome: 1.67,
      startingCost: 3.738,
      costFactor: 1.07,
      level: 1,
      income: 1.67,
      upgradeCost: 4.28,
      bonusFactor: 1,
    },
    bonus: {
      1: 1,
      25: 2,
      50: 4,
      100: 8,
      200: 16,
      300: 32,
      400: 64,
      500: 128,
      600: 256,
      1000: 512,
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

  return (
    <>
      <DisplayData ticks={ticks} />
      <DisplayGenerator info={generator} />
      <UpgradeButton
        ticks={ticks}
        cost={generator.upgradeCost}
        nextLevel={generator.level + 1}
        onClick={() => dispatch({ type: "upgrade" })}
      />
      <UpgradeButtonMax
        ticks={ticks}
        generator={generator}
        onClick={(level) => dispatch({ type: "upgrade", payload: level })}
      />
    </>
  );
};

export default Engine;
