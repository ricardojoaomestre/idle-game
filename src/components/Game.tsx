import React from "react";
import DisplayData from "./DisplayData";
import GeneratorStack from "./GeneratorStack";
import ResetButton from "./ResetButton";
import { Container } from "@chakra-ui/react";

const Game = () => {
  return (
    <Container pt={20} minW={"container.lg"}>
      <DisplayData />
      <GeneratorStack />
      <ResetButton />
    </Container>
  );
};

export default Game;
