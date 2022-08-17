import React from "react";

const DisplayGenerator = ({ info, onUpgrade }) => {
  const { level, factor } = info;

  return (
    <div>
      <p>Level: {level}</p>
      <p>Factor: {factor}</p>
      <button onClick={onUpgrade}>Upgrade</button>
    </div>
  );
};

export default DisplayGenerator;
