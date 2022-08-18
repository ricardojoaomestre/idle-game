import Engine from "./components/Engine";
import { GameContextProvider } from "./context/gameContext";
import { tick } from "./reducers/engine";
import { initialState, bonus } from "./config";

const App = () => (
  <GameContextProvider reducer={tick} initialState={{ ...initialState, bonus }}>
    <Engine />
  </GameContextProvider>
);

export default App;
