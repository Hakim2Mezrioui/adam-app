import { useDispatch } from "react-redux";

function useActions() {
    const dispatch = useDispatch();

    function handleChange(pyload) {
        dispatch({type: "search", pyload});
    }

    function handleReset() {
        dispatch({type: "reset"});
    }

    return {
        handleChange, // handleChange: handleChange
        onHandleReset: handleReset,
    }
}

export default useActions;