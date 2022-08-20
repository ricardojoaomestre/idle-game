import React from "react";
import { integer, float } from "../helpers/format";
const DisplayGenerator = ({ info }: { info: GeneratorInfo }) => {
  const { level, income, bonusFactor } = info;

  return (
    <div>
      <p>Level: {level}</p>
      <p>Income: {float(income)}/s</p>
      <p>Bonus: {integer(bonusFactor)}</p>
    </div>
  );
};

export default DisplayGenerator;
