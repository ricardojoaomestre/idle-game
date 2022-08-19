import { reset } from "helpers/localStorage";
import React from "react";

interface Props {}

function ResetButton(props: Props) {
  const handleClick = () => {
    if (window.confirm("Are you sure you want to reset the game progress?")) {
      reset();
    }
  };

  return <button onClick={handleClick}>Reset progress</button>;
}

export default ResetButton;
