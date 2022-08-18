import Engine from "./components/Engine";
import ErrorBoundary from "./components/ErrorBoundary";
import { GameContextProvider } from "./context/gameContext";
import { tick } from "./reducers/engine";
import config from "./config";
import { load } from "./helpers/localStorage";
import { calculateIdleIncome } from "./helpers/calculations";

const App = () => {
  let initialState = load() || config;

  if (initialState.savedAt) {
    initialState = calculateIdleIncome(initialState);
  }

  return (
    <GameContextProvider reducer={tick} initialState={initialState}>
      <ErrorBoundary>
        <Engine />
      </ErrorBoundary>
    </GameContextProvider>
  );
};

export default App;
