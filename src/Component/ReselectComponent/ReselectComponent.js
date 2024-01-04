import { useState, Fragment } from "react";
import { onAjouter } from "./ReselectActions";
import { useDispatch, useSelector } from "react-redux";

function ReselectComponenet () {
    const dispatch = useDispatch();
    const [val, setVal] = useState({});

    const handleChange = (e) => {
        setVal(e.target.value);
    }

    const handleAppend = () => {
        dispatch(onAjouter(val));
    }

    const livres = useSelector(state => state.livres);

    return (
        <Fragment>
            <div>
                <div>
                    <label>name</label>
                    <input onChange={handleChange} />
                </div>
                <div>
                    <label>prix</label>
                    <input onChange={handleChange} />
                </div>
                <button onClick={handleAppend}>ajouter</button>
            </div>
            
            <ul>
                {
                    livres.map(livre => (
                        <li>{ livre.name } - {  livre.prix }</li>
                    ))
                }
            </ul>

            <h1>total: </h1>
        </Fragment>
    )
}

export default ReselectComponenet;