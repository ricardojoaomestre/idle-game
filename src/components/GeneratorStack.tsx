import { UPGRADE_ACTION, BUY_GENERATOR_ACTION } from "../constants";
import React from "react";
import useGameContext from "../hooks/useGameContext";
import BuyGeneratorButton from "./BuyGeneratorButton";
import DisplayGenerator from "./DisplayGenerator";
import UpgradeButton from "./UpgradeButton";
import UpgradeButtonMax from "./UpgradeButtonMax";
import { Box, Divider, HStack } from "@chakra-ui/react";

const GeneratorStack = () => {
  const [state, dispatch] = useGameContext();
  const { ticks, generators, market } = state;

  return (
    <div>
      <BuyGeneratorButton
        ticks={ticks}
        nextGeneratorIndex={generators?.length}
        market={market}
        onClick={() => dispatch({ type: BUY_GENERATOR_ACTION })}
      />
      <Divider my={4} />
      {generators.map((generator, idx) => (
        <Box width={"100%"} key={idx} mb={8}>
          <DisplayGenerator info={generator} />
          <HStack width={"100%"} mt={12}>
            <UpgradeButton
              ticks={ticks}
              cost={generator.upgradeCost}
              nextLevel={generator.level + 1}
              onClick={() =>
                dispatch({
                  type: UPGRADE_ACTION,
                  payload: { generator, idx, level: generator.level + 1 },
                })
              }
            />
            <UpgradeButtonMax
              ticks={ticks}
              generator={generator}
              onClick={(level) =>
                dispatch({
                  type: UPGRADE_ACTION,
                  payload: { generator, level, idx },
                })
              }
            />
          </HStack>
        </Box>
      ))}
    </div>
  );
};

export default GeneratorStack;
