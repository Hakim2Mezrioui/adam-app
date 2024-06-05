import { useEffect, useState } from "react";

function CycleDeVie() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("adam");  // let name = "adam"


    // useEffect(function de callback, les dependances sous form list)

    // useEffect(function() { // component did mount && componenet did update
    //     console.log("created");
    // });

    // useEffect(function() { // component did mount 
    //     console.log("created");
    // }, [])

    useEffect(function() {
        console.log("count updated");
    }, [count])

    useEffect(function() {
        console.log("name updated");
    }, [name])

    return (
        <>
            <h1>Hello World</h1>
            <button onClick={() => {setCount(count + 10)}}>+</button>
            <br />
            <hr />
            <input on onChange={(e) => setName(e.target.value)} />
            <h3>
                {name}
            </h3>
            <h3>
                {count}
            </h3>
        </>
    )

}

export default CycleDeVie;