import { RESET_ACTION } from "../constants";
import useGameContext from "hooks/useGameContext";
import React from "react";
import { Button } from "@chakra-ui/react";

function ResetButton() {
  const [, dispatch] = useGameContext();
  const handleClick = () => {
    if (window.confirm("Are you sure you want to reset the game progress?")) {
      dispatch({ type: RESET_ACTION });
    }
  };

  return (
    <Button onClick={handleClick} colorScheme={"red"}>
      Reset progress
    </Button>
  );
}

export default ResetButton;
