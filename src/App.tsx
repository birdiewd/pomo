import { scan } from "react-scan";
import { FC, useState } from "react";
import Pomo from "./components/Pomo";
import Start from "./components/Start";
import { useStore } from "@tanstack/react-store";
import bracketsStore from "./_stores/bracketStore";

scan({ enabled: true });

const App: FC = () => {
  const isTesting = useStore(bracketsStore, (state) => state.isTesting);
  const [enabled, setEnabled] = useState(isTesting);

  return enabled ? <Pomo /> : <Start onClick={() => setEnabled(true)} />;
};

export default App;
