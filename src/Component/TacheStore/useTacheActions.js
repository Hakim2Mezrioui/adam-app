import { useDispatch } from "react-redux";

const useTacheActions = () => {
    const dispatch = useDispatch();

    const onAppend = (payload) => {
        dispatch({type: "append", tache: payload});
    }

    return {
        onAppend,
    }
}

export default useTacheActions;