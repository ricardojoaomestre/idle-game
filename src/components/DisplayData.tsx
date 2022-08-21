import React from "react";
import { float } from "../helpers/format";
import useGameContext from "../hooks/useGameContext";
import { Text } from "@chakra-ui/react";
const DisplayData = () => {
  const [state] = useGameContext();
  const { ticks } = state;
  return (
    <div>
      <Text
        fontSize={"6xl"}
        fontWeight={"bold"}
        textAlign={"right"}
        color={"green.500"}
        mb={4}
      >
        {float(ticks)}
      </Text>
    </div>
  );
};

export default DisplayData;
