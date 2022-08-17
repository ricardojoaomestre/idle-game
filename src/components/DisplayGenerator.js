import React from "react";
import { number } from "../helpers/format";
const DisplayGenerator = ({ info }) => {
  const { level, income } = info;

  return (
    <div>
      <p>Level: {level}</p>
      <p>Income: {number(income)}/s</p>
    </div>
  );
};

export default DisplayGenerator;
