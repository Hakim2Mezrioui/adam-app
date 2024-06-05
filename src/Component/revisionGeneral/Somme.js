import { useState } from "react";

function Somme() {
  const [cont, setCont] = useState(0);
  const [cont2, setCont2] = useState(0);
  const [total,settotal] = useState();

  function calculer() {
    settotal(cont+cont2)
  }
  function onsetcont(e){
    setCont(e.target.value)
  }
  function onsetcont2(e){
    setCont2(e.target.value)
  }


  return (
    <>
      <div>
        <input type="number" onChange={onsetcont}/>
        <input type="number" onChange={onsetcont2}/>
      </div>
      <button onClick={calculer}>valider</button>
      <h1>le total est {total}</h1>
    </>
  );
}
export default Somme;