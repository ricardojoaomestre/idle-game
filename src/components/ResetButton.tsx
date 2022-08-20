import { RESET_ACTION } from "../constants";
import useGameContext from "hooks/useGameContext";
import React from "react";

function ResetButton() {
  const [, dispatch] = useGameContext();
  const handleClick = () => {
    if (window.confirm("Are you sure you want to reset the game progress?")) {
      dispatch({ type: RESET_ACTION });
    }
  };

  return <button onClick={handleClick}>Reset progress</button>;
}

export default ResetButton;
