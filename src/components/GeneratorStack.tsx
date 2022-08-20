import { UPGRADE_ACTION, BUY_GENERATOR_ACTION } from "../constants";
import React from "react";
import useGameContext from "../hooks/useGameContext";
import BuyGeneratorButton from "./BuyGeneratorButton";
import DisplayGenerator from "./DisplayGenerator";
import UpgradeButton from "./UpgradeButton";
import UpgradeButtonMax from "./UpgradeButtonMax";

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
      <hr />
      {generators.map((generator, idx) => (
        <div key={idx}>
          <DisplayGenerator info={generator} />
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
        </div>
      ))}
    </div>
  );
};

export default GeneratorStack;
