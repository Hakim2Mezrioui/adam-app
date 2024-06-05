import { useEffect, useState } from "react";

const AutoCounter = () => {
  const [cpt, setCpt] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      console.log(cpt);
      setCpt(cpt + 1);
    }, 1000);

    return () => {  // componenetWillUnmount
      clearInterval(count);
    };
  }, [cpt]);

  return (
    <>
      <h1>{cpt}</h1>
    </>
  );
};

export default AutoCounter;
