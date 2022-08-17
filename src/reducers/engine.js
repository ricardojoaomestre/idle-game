import { UPDATE_SPEED } from "../constants";

export const tick = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        ticks: state.ticks + state.factor / (1000 / UPDATE_SPEED),
      };
    case "upgrade":
      const updFactor = state.factor + 1;
      const updTicks = state.ticks - 10;
      return { ...state, ticks: updTicks, factor: updFactor };
    default:
      throw new Error("Action not available");
  }
};
