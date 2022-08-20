import React from "react";
import { float } from "../helpers/format";
import useGameContext from "../hooks/useGameContext";

const DisplayData = (): React.ReactNode => {
  const [state] = useGameContext();
  const { ticks } = state;
  return (
    <div>
      <p>Ticks: {float(ticks)}</p>
    </div>
  );
};

export default DisplayData;
