import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajouter } from "./actions";

const FormListStagiaire = () => {
  const [stagiaire, setStagiaire] = useState({});
  const [toggle, setToggle] = useState(false);
  const idRef = useRef();

  const stagiaireSelected = useSelector((state) => state.stagiaireSelected);

  useEffect(() => {
    console.log("hi");
    setStagiaire(stagiaireSelected);
    idRef.current.value = stagiaireSelected.id ? stagiaireSelected.id : count.length;
  }, [stagiaireSelected]);

  const count = useSelector((state) => state.stagiaires);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStagiaire({
      ...stagiaire,
      [name]: value,
    });
  };

  const handleAjouter = (e) => {
    e.preventDefault();
    dispatch(
      ajouter({
        id: idRef.current.value,
        ...stagiaire,
      })
    );
  };

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <>
      <form>
        <div className="d-flex justify-content-between w-25 mb-2">
          <label>id</label>
          <input ref={idRef} name="id" disabled value={count.length + 1} />
        </div>
        <div className="d-flex justify-content-between w-25 mb-2">
          <label>matricule</label>
          <input value={stagiaire.matricule} name="matricule" onChange={handleChange} />
        </div>
        <div className="d-flex justify-content-between w-25 mb-2">
          <label>nom</label>
          <input value={stagiaire.nom} name="nom" onChange={handleChange} />
        </div>
        <div className="d-flex justify-content-between w-25 mb-2">
          <label>ville</label>
          <input value={stagiaire.ville} name="ville" onChange={handleChange} />
        </div>
        <div className="d-flex justify-content-between w-25 mb-2">
          <label>codePostal</label>
          <input value={stagiaire.codePostal} name="codePostal" onChange={handleChange} />
        </div>
        <div className="d-flex justify-content-between w-25 mb-2">
          <label>Moyenne</label>
          <input value={stagiaire.moyenne} name="moyenne" onChange={handleChange} />
        </div>
        <div className="d-flex gap-1 mt-2">
          <button onClick={handleAjouter}>Ajouter</button>
          <button onClick={handleToggle}>filter ville et nom</button>

          <button>vider</button>
          <button>initialser recherche</button>
        </div>
      </form>
      {toggle && (
        <div>
          <div>
            <label>ville</label>
            <input />
          </div>
          <div>
            <label>nom</label>
            <input />
          </div>
        </div>
      )}
    </>
  );
};

export default FormListStagiaire;
