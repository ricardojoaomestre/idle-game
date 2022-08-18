import React from "react";
import { interger, float } from "../helpers/format";
const DisplayGenerator = ({ info }) => {
  const { level, income, bonusFactor } = info;

  return (
    <div>
      <p>Level: {level}</p>
      <p>Income: {float(income)}/s</p>
      <p>Bonus: {interger(bonusFactor)}</p>
    </div>
  );
};

export default DisplayGenerator;
