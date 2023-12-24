import { Provider } from "react-redux";
import { storeEx } from "./Component/ExFilter/storeEx";
import JoueRandom from "./Component/joueRandom/JoueRandoml";
import Taches from "./Component/TacheStore/Taches";
import { TacheStore } from "./Component/TacheStore/TacheStore";

function App() {
  return (
    <>
    <Provider store={TacheStore}>
        <Taches />
    </Provider>
    </>
  );
}

export default App;