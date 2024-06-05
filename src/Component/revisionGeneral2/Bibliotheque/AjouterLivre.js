import { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouterLivre } from "./redux/actions";

const AjouterLivre = () => {
  const [livre, setLivre] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLivre({
      ...livre,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(ajouterLivre(livre));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>auteur</label>
        <input name="auteur" onChange={handleChange} />
      </div>
      <div>
        <label>numbre de page</label>
        <input name="nbrPage" onChange={handleChange} />
      </div>
      <div>
        <label>price</label>
        <input name="price" onChange={handleChange} />
      </div>
      <div>
        <label>Category</label>
        <input name="category" onChange={handleChange} />
      </div>
      <button>ajouter</button>
    </form>
  );
};

export default AjouterLivre;
