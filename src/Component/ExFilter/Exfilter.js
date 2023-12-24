import { useRef, useState } from "react";
// import { dataR } from "./data";
import useActions from "./useActions";
import { useSelector } from "react-redux";

function ExFilter() {
    // const [data, setData] = useState(dataR);
    // const [dataFiltred, setDataFiltred] = useState(data);


    const dataFiltred = useSelector(state => state.fruitsFiltred);
    const {handleChange, onHandleReset} = useActions();

    const dataRef = useRef();

    // function handleChange(e) {
    //     const dataF = dataR.filter((item) => {
    //         return item.includes(e.target.value);
    //     });

    //     setDataFiltred(dataF);
    // }

    function handleReset() {
        onHandleReset();
        dataRef.current.value = "";
    }

    return (
        <>
            <div>
                <input ref={dataRef} onChange={(e) => handleChange(e.target.value)} />
                <button onClick={handleReset}>reset</button>
            </div>
            <ul>
                {
                    dataFiltred.map(function(item) {
                        return <li>{item}</li>
                    })
                }
            </ul>
        </>
    )
}

export default ExFilter;