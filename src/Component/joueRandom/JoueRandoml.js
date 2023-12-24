import { useState } from "react";
import TwoPerson from "./TwoPerson";

function JoueRandom() {
  const [isWin, setWin] = useState(false);
  const [nombreTrying, setNombreTrying] = useState(0);
  const [nombreCache, setNombreCache] = useState(
    Math.round(Math.random() * 10)
  );
  const [inVal, setInVal] = useState();
  const [choiseMethod, setChoiceMethod] = useState();

  function handleValid() {
    setNombreTrying(nombreTrying + 1);
    if (nombreCache == inVal) {
      setWin(true);
    }
    setInVal("");
  }

  function rejouer() {
    setWin(false);
    setNombreCache(Math.round(Math.random() * 10));
    setNombreTrying(0);
  }

  function choose(choice) {
    setChoiceMethod(choice);
  }

  return (
    <div>
    {
        !choiseMethod && (
            <>
                <h3>You want to play</h3>
                <button onClick={() => choose("2Person")}>2 Person</button>
                <button onClick={() => choose("withRobot")}>With robot</button>
            </>
        )
    }

      {!isWin && choiseMethod === "withRobot" && (
        <>
          <h3>Nombre Caché</h3>
          <h3>Nombre d'essaie: {nombreTrying}</h3>
          <input
            value={inVal}
            onChange={(e) => setInVal(e.target.value)}
            type="number"
          />
          <button onClick={handleValid}>Validé</button>
        </>
      )}

      {!isWin && choiseMethod === "2Person" && (
        <TwoPerson />
      )}

      {isWin && choiseMethod && (
        <>
          <h3>Vous avez gangné</h3>
          <h3>Le nombre est: {nombreCache}</h3>
          <h3>Nombre d'essaie: {nombreTrying}</h3>
          <button onClick={rejouer}>Rejouer</button>
        </>
      )}
    </div>
  );
}

export default JoueRandom;
