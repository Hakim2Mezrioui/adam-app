import { Provider } from "react-redux";
import CounterToolkit from "./Component/CounterToolkit/CounterToolkit";
import { counterToolkitSliceStore } from "./Component/CounterToolkit/CounterToolkitSlice";
import ReselectComponenet from "./Component/ReselectComponent/ReselectComponent";
import { reselectStore } from "./Component/ReselectComponent/ReselectStore";

function App() {
  return (
    <>
    <Provider store={reselectStore}>
        <ReselectComponenet />
    </Provider>
    </>
  );
}

export default App;