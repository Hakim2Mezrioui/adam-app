import { Fragment, useEffect, useState } from "react";

const ListVille = ({ trains, idTrain, onSupprimerVille }) => {
  const [villes, setVilles] = useState([]);

  useEffect(() => {
    const tr = trains.find((train) => idTrain === train.id);
    console.log(idTrain);
    if (idTrain) {
      setVilles([...tr.villes]);
    }
  }, [idTrain, trains]);

  return (
    <Fragment>
      <table>
        <tr>
          <th>Nom de ville</th>
          <th>ordre de passage</th>
          <th></th>
        </tr>
        {villes.map((ville, idv) => (
          <tr>
            <td>{ville.nomV}</td>
            <td>{ville.ordreP}</td>
            <td>
              <button onClick={() => onSupprimerVille(idv, idTrain)}>
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </table>
    </Fragment>
  );
};

export default ListVille;
