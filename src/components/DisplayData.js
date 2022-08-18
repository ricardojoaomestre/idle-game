import React from "react";
import { float } from "../helpers/format";

const DisplayData = ({ ticks }) => {
  return (
    <div>
      <p>Ticks: {float(ticks)}</p>
    </div>
  );
};

export default DisplayData;
