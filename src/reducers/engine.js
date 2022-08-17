import { UPDATE_SPEED } from "../constants";

export const tick = (state, action) => {
  const { generator, ticks } = state;

  switch (action.type) {
    case "increment":
      return {
        ...state,
        ticks: ticks + generator.factor / (1000 / UPDATE_SPEED),
      };
    case "upgrade":
      const updLevel = generator.level + 1;
      const updFactor = generator.factor + 1;
      const updTicks = ticks - 10;
      return {
        ...state,
        ticks: updTicks,
        generator: { level: updLevel, factor: updFactor },
      };
    default:
      throw new Error("Action not available");
  }
};
