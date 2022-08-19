// @ts-nocheck
import React from "react";
import DisplayData from "./DisplayData";
import GeneratorStack from "./GeneratorStack";
import ResetButton from "./ResetButton";

const Game = () => {
  return (
    <div>
      <DisplayData />
      <GeneratorStack />
      <ResetButton />
    </div>
  );
};

export default Game;
