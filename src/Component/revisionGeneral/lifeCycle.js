import { useEffect, useState } from "react";

const LifeCycle = () => {
    const [num, setNum] = useState(0);
    const [entryVal, setEntryVal] = useState("");

    // const [state, setState] = useState({num: 0, entryVal: ""});


    useEffect(() => {
        console.log("Component Created");
    })

    useEffect(() => {
        console.log("component did mount");
    }, [])

    useEffect(() => {
        console.log("num Updated");
    }, [num])


    const inc = () => {
        setNum(num + 1);
    }

    const dec = () => {
        setNum(num - 1);
        }

    const onSetEntryVal = (e) => {
        setEntryVal(e.target.value);
    }
    
    return (
        <>
            <h1>Life Cycle</h1>
            <div className="d-flex gap-2 align-items-center">
                <button onClick={inc} className="btn btn-primary">+</button>
                <h1>{num}</h1>
                <button onClick={dec} className="btn btn-primary">-</button>
            </div>
            <div>
                <input onChange={onSetEntryVal} />
            </div>
        </>
    )
}

export default LifeCycle;