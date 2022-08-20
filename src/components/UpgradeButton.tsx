import React from "react";
import { float } from "../helpers/format";

const UpgradeButton = ({
  ticks,
  cost,
  nextLevel,
  onClick,
}: {
  ticks: number;
  cost: number;
  nextLevel: number;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} disabled={cost > ticks}>
      Upgrade to Level {nextLevel} (cost: {float(cost)})
    </button>
  );
};

export default UpgradeButton;
