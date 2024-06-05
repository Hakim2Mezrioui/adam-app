import { useState } from "react";

const AddVille = ({ onAjouterVille }) => {
  const [newCity, setNewCity] = useState();
  const onChnageHandler = (e) => {
    setNewCity(e.target.value);
  };

  const onClickHandler = () => {
    onAjouterVille({ nomV: newCity, ordreP: 40 });
  };

  return (
    <div>
      <label>Nouvelle de passage</label>
      <input onBlur={onChnageHandler} />
      <button onClick={onClickHandler}>Ajouter la ville</button>
    </div>
  );
};

export default AddVille;
