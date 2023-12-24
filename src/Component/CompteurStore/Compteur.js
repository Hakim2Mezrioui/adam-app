import { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "./actions";

function Compteur() {
  // const [cpt, setCpt] = useState(0);
  // const cpt = useSelector(function(state) { return state.cpt });
  const cpt = useSelector((state) => state.cpt);
  const { increment, decrement } = useActions();

  function onIcrement() {
    // setCpt(cpt + 1);
    increment();
  }

  function onDecrement() {
    // setCpt(cpt - 1);
    decrement();
  }

  return (
    <>
      <h1>{ cpt }</h1>
      <button onClick={onIcrement}>incrementer</button>
      <button onClick={onDecrement}>decrementer</button>
    </>
  );
}

export default Compteur;
