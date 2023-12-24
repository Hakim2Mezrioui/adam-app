import { useDispatch } from "react-redux";

export function useActions() {
    const dispatch = useDispatch();

    function increment() {
        dispatch({type: "increment"});
    }
    
    function decrement() {
        dispatch({type: "decrement"});
    }
    
    function reset() {
        dispatch({type: "reset"});
    }

    return {
        onIncrement: increment,
        onDecrement: decrement,
        onReset: reset,
    }
}