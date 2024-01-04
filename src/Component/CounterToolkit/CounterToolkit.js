import { useDispatch, useSelector } from "react-redux";
import { counterToolkitSliceActions } from "./CounterToolkitSlice";

function CounterToolkit() {
const cpt = useSelector(state => state.cpt);
const dispatch = useDispatch();


    return (
        <>
            <h1>{ cpt }</h1>
            <button onClick={() => dispatch(counterToolkitSliceActions.increment())}>increment</button>
            <button onClick={() => dispatch(counterToolkitSliceActions.decrement())}>decrement</button>
        </>
    )
}

export default CounterToolkit;