import { useState } from "react";

const AddVille = () => {
  const [newCity, setNewCity] = useState();
  const onChnageHandler = (e) => {
    setNewCity(e.target.value);
  };

  return (
    <div>
      <label>Nouvelle de passage</label>
      <input onBlur={onChnageHandler} />
      <button>Ajouter la ville</button>
    </div>
  );
};

export default AddVille;
