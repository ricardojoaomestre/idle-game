import Engine from "./components/Engine";
import ErrorBoundary from "./components/ErrorBoundary";
import { GameContextProvider } from "./context/gameContext";
import { tick } from "./reducers/engine";
import config from "./config";
import { load } from "./helpers/localStorage";

const App = () => {
  const initialState = load() || config;

  return (
    <GameContextProvider reducer={tick} initialState={initialState}>
      <ErrorBoundary>
        <Engine />
      </ErrorBoundary>
    </GameContextProvider>
  );
};

export default App;
