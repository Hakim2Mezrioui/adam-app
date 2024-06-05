import { Fragment, useEffect, useState } from "react";
import RecherchTrain from "./RecherchTrain";
import InfoTrain from "./InfosTrain";
import AddTrain from "./AddVille";
import ListTrains from "./ListTrains";
import ListVille from "./ListVille";
import { trains as tr } from "./data.module";
import AddVille from "./AddVille";

const GestionTrain = () => {
  const [idt, setIdT] = useState();
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    setTrains([...tr]);
  }, []);

  const getIdTrain = (id) => {
    setIdT(id);
  };

  const ajouterVille = (ville) => {
    const train = trains.find((trn) => trn.id === idt);
    if (!train) {
      return;
    }
    train.villes.push(ville);

    const newTrains = trains.filter((trn) => {
      if (train.id === idt) {
        return trn;
      }
      return train;
    });
    console.log(newTrains);
    setTrains([...newTrains]);
  };

  const supprimerVille = (idv, idt) => {
    const train = trains.find((trn) => trn.id === idt);
    console.log(train);
    if (!train) {
      return;
    }

    train.villes.splice(idv, 1);
    const newTrains = trains.filter((trn) => {
      if (train.id === idt) {
        return trn;
      }
      return train;
    });

    setTrains([...newTrains]);
    console.log(trains);
  };

  return (
    <Fragment>
      <RecherchTrain onGetIdTrain={getIdTrain} />
      <InfoTrain trains={trains} idTrain={idt} />
      <AddVille onAjouterVille={ajouterVille} />
      <ListVille
        onSupprimerVille={supprimerVille}
        trains={trains}
        idTrain={idt}
      />
    </Fragment>
  );
};

export default GestionTrain;
