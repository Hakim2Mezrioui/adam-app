import { useState } from "react";

const RecherchTrain = (props) => {
    const [idTrain, setIdTrain] = useState();

    const onChnageHandler = (e) => {
        setIdTrain(e.target.value);
    }

    const onClickHandler = () => {
        props.onGetIdTrain(idTrain);
    }

    return (
        <div>
            <label>Id Train</label>
            <input name="id train" onBlur={onChnageHandler} />
            <button onClick={onClickHandler} >Rechercher</button>
        </div>
    )
}

export default RecherchTrain;