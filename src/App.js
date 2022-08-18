import Engine from "./components/Engine";
import { GameContextProvider } from "./context/gameContext";
import { tick } from "./reducers/engine";
import config from "./config";

const App = () => (
  <GameContextProvider reducer={tick} initialState={config}>
    <Engine />
  </GameContextProvider>
);

export default App;
