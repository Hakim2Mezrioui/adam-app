import { useState } from "react";

function TwoPerson() {
  const [isWin1, setWin1] = useState(false);
  const [isWin2, setWin2] = useState(false);

  const [done, setDone] = useState(false);

  const [inVal1, setInVal1] = useState();
  const [inVal2, setInVal2] = useState();

  const [nombreTrying1, setNombreTrying1] = useState(0);
  const [nombreTrying2, setNombreTrying2] = useState(0);

  const [toggle, setToggle] = useState(false);

  const [nombreCache, setNombreCache] = useState(
    Math.round(Math.random() * 10)
  );

  function handleValid1() {
    if(inVal1 == "") return;
    setNombreTrying1(nombreTrying1 + 1);
    if (inVal1 == nombreCache) {
      setWin1(true);
      setDone(true);
    }

    setInVal1("");
    handleToggle();
}

function handleValid2() {
    if(inVal2 == "") return;
    setNombreTrying2(nombreTrying2 + 1);
    if (inVal2 == nombreCache) {
        setWin2(true);
        setDone(true);
    }

    setInVal2("");
    handleToggle();
}

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <>
      {!done && (
        <>
          <h3>Nombre Caché</h3>
          <div style={{ display: "flex" }}>
            <span>
              <h3>Nombre d'essaie 1: {nombreTrying1}</h3>
              <input
                value={inVal1}
                onChange={(e) => setInVal1(e.target.value)}
                type="number"
              />
              <button disabled={toggle} onClick={handleValid1}>
                Validé player 1
              </button>
            </span>

            <span>
              <h3>Nombre d'essaie 2: {nombreTrying2}</h3>
              <input
                value={inVal2}
                onChange={(e) => setInVal2(e.target.value)}
                type="number"
              />
              <button disabled={!toggle} onClick={handleValid2}>
                Validé player 2
              </button>
            </span>
          </div>
        </>
      )}

      {(isWin1 || isWin2) && (
        <>
          <h3>Vous avez gangné</h3>
          <h3>Le nombre est: {nombreCache}</h3>
          <h3>Nombre d'essaie: {isWin1 ? nombreTrying1 : nombreTrying2}</h3>
          {/* <button onClick={rejouer}>Rejouer</button> */}
        </>
      )}
    </>
  );
}

export default TwoPerson;
