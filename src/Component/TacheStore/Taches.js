import { useState } from "react";
import usetacheActions from "./useTacheActions";
import { useSelector } from "react-redux";

const Taches = () => {
  const [tache, setTache] = useState();
//   const [taches, setTaches] = useState([]);
    const taches = useSelector(state => state.taches);
  const { onAppend } = usetacheActions();


  const handleAppend = () => {
    // setTaches([...taches, tache]);
    onAppend(tache);
  };

  const handleChange = (e) => {
    setTache(e.target.value);
  };

  return (
    <>
      <div>
        <input onChange={handleChange} />
        <button onClick={handleAppend}>append</button>
      </div>

      <ul>
        {taches.map((t) => {  
          return <li> {t} </li>;
        })}
      </ul>
    </>
  );
};

export default Taches;
