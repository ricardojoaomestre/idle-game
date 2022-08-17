import React from "react";
import { number } from "../helpers/format";

const DisplayData = ({ ticks }) => {
  return (
    <div>
      <p>Ticks: {number(ticks)}</p>
    </div>
  );
};

export default DisplayData;
