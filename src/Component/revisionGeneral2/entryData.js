import { useState } from "react";
import Resultat from "./resultat";

function EntryData() {
  const [dollar, setDollar] = useState(0);
  const [dh, setDh] = useState(0);

  function calculeEnDirham() {
    setDh(dollar * 9);
  }

  function changeHandler(e) {
    setDollar(e.target.value);
  }

  function fromChild(message) {
    document.write(message);
  }

  return (
    <>
      <div>
        <h1>dollar</h1>
        <input onChange={changeHandler} />
        <button onClick={calculeEnDirham}>Click</button>
      </div>

      <Resultat onFromChild={fromChild} montant={dh} />
    </>
  );
}

export default EntryData;
