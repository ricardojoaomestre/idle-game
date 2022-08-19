// @ts-nocheck
import React from "react";
import { float } from "../helpers/format";

const UpgradeButton = ({ ticks, cost, nextLevel, onClick }) => {
  return (
    <button onClick={onClick} disabled={cost > ticks}>
      Upgrade to Level {nextLevel} (cost: {float(cost)})
    </button>
  );
};

export default UpgradeButton;
