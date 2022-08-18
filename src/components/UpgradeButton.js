import React from "react";
import { interger } from "../helpers/format";

const UpgradeButton = ({ ticks, cost, nextLevel, onClick }) => {
  return (
    <button onClick={onClick} disabled={cost > ticks}>
      Upgrade to Level {nextLevel} (cost: {interger(cost)})
    </button>
  );
};

export default UpgradeButton;
