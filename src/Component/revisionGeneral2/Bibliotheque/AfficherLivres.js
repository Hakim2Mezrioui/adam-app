import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import { livresModule } from "./livres.module";
import { useDispatch, useSelector } from "react-redux";
import { supprimerLivre } from "./redux/actions";

const AfficherLivres = () => {
  const livres = useSelector((state) => state.livres);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(supprimerLivre(id));
  };

  return (
    <Fragment>
      <div>
        {livres.map((livre) => (
          <div>
            <h1>auteur: {livre.auteur}</h1>
            <p>nombre de pages: {livre.nbrPage}</p>
            <p>price: {livre.price}</p>
            <p>category: {livre.category}</p>
            <button onClick={() => onDelete(livre.id)}>supprimer</button>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default AfficherLivres;
