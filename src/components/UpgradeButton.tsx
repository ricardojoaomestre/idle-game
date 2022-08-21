import { Button } from "@chakra-ui/react";
import React from "react";
import { float } from "../helpers/format";

const UpgradeButton = ({
  ticks,
  cost,
  nextLevel,
  onClick,
  ...rest
}: {
  ticks: number;
  cost: number;
  nextLevel: number;
  onClick: () => void;
  colorScheme?: string;
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={cost > ticks}
      colorScheme={"whatsapp"}
      {...rest}
    >
      Upgrade to Level {nextLevel} (cost: {float(cost)})
    </Button>
  );
};

export default UpgradeButton;
