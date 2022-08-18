import React from "react";
import useGameContext from "../hooks/useGameContext";
import DisplayData from "./DisplayData";
import DisplayGenerator from "./DisplayGenerator";
import UpgradeButton from "./UpgradeButton";
import UpgradeButtonMax from "./UpgradeButtonMax";

const Game = () => {
  const [state, dispatch] = useGameContext();
  const { ticks, generator } = state;
  return (
    <div>
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
    </div>
  );
};

export default Game;
