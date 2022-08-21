import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { integer, float } from "../helpers/format";
const DisplayGenerator = ({ info }: { info: GeneratorInfo }) => {
  const { level, income, bonusFactor } = info;

  return (
    <VStack>
      <Flex
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width="100%"
      >
        <Text fontSize={"2xl"}>Level: {level}</Text>
        <Text fontSize={"2xl"}>Bonus: {integer(bonusFactor)}</Text>
      </Flex>
      <Text fontSize={"3xl"} fontWeight={"bold"}>
        Income: {float(income)}/s
      </Text>
    </VStack>
  );
};

export default DisplayGenerator;
