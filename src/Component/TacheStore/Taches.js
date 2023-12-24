import { useState } from "react";

const Taches = () => {
  const [tache, setTache] = useState();
  const [taches, setTaches] = useState([]);

  const handleAppend = () => {
    setTaches([...taches, tache]);
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
