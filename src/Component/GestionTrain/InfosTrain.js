import { useEffect, useState } from "react";
import { trains } from "./data.module";

const InfoTrain = ({ idTrain }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const train = trains.find((train) => (train.id === idTrain));
    setInfo(train);
  }, [idTrain]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30em",
        gap: "1em",
        justifyContent: "space-between",
      }}
    >
      <span>
        <label>Nom</label>
        <input value={info && info.nom ? info.nom : ""} disabled />
      </span>
      <span>
        <label>Ville de depart</label>
        <input value={info && info.villes ? info.villes[0].nomV : ""} disabled />
      </span>
      <span>
        <label>ville terminus</label>
        <input value={info && info.villes && info.villes.length > 0 ? info.villes[1].nomV : ""} disabled />
      </span>
    </div>
  );
};

export default InfoTrain;
