import { useDispatch } from "react-redux";

export function useActions() {
    const dispatch = useDispatch();
    function onIncrement() {
        dispatch({type: 'increment'});
    }

    function onDecrement() {
        dispatch({type: "decrement"});
    }

    return {
        increment: onIncrement,
        decrement: onDecrement,
    }
}