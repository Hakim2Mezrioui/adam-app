import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    // var cpt = 0;
    
    useEffect(function() {
        const i = setInterval(function() {
            setCount(count + 1);
            // cpt += 1;
            // console.log(cpt);
        }, 1000);

        return () => {
            clearInterval(i);
        }
    }, [count])

    return (
        <>
            {count}
        </>
    )
}

export default Counter;