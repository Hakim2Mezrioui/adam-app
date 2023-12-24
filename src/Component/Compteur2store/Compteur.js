// import { useState } from "react";

// function Compteur() {
//     const [cpt, setCpt] = useState(0); // let cpt = 0; initialement

//     function increment() {
//         setCpt(cpt + 1); // cpt += 1;
//     }

//     function decrement() {
//         setCpt(cpt - 1);
//     }

//     function reset() {
//         setCpt(0);
//     }

//     return (
//         <>
//             <h1>{ cpt }</h1>
//             <button onClick={increment}>increment</button>
//             <button onClick={decrement}>decrement</button>
//             <button onClick={reset}>reset</button>
//         </>
//     )
// }

// export default Compteur;

import { useState } from "react";
import { useActions } from "./action";
import { useSelector } from "react-redux";

function Compteur() {
    // const [cpt, setCpt] = useState(0); // let cpt = 0; initialement
    const cpt = useSelector(state => state.cpt);
    const {onIncrement, onDecrement, onReset} = useActions();

    function increment() {
        // setCpt(cpt + 1); // cpt += 1;
        onIncrement()
    }

    function decrement() {
        // setCpt(cpt - 1);
        onDecrement();
    }

    function reset() {
        // setCpt(0);
        onReset();
    }

    return (
        <>
            <h1>{ cpt }</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </>
    )
}

export default Compteur;