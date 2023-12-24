import { useState } from "react";

function Compteur() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1) // count ++ or count += 1 or count = count + 1
  }

  function decrement() {
    setCount(count - 1)
  }

  function initialiser() {
    setCount(0)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={initialiser}>initialiser</button>
    </>
  );
}
export default Compteur;
