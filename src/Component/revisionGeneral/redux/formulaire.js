import { Fragment, useRef, useState } from "react";
import ShowPersons from "./ShowPersons";
import { useDispatch, useSelector } from "react-redux";
import { ajouter, modifier } from "./action";
import homme from "/logo192.png";

const Formulaire = () => {
  const [person, setPerson] = useState({
    name: "",
    age: null,
  });

  const mode = useSelector((state) => state.mode);
  const [i, setI] = useState();

  const dispatch = useDispatch();

  const selectPerson = (index, person) => {
    setPerson(person);
    setI(index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({
      ...person,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPerson({
      name: "",
      age: "",
    });

    if (mode == "ajouter") {
      dispatch(ajouter(person));
    } else {
      dispatch(modifier(i, person));
    }
  };

  return (
    <Fragment>
      <form id="personForm" onSubmit={handleSubmit}>
        <div>
          <label>name</label>
          <input
            disabled
            value={person.name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div>
          <label>age</label>
          <input value={person.age} onChange={handleChange} name="age" />
        </div>
        <button>Submit</button>
      </form>
      <img src={homme} />
      <ShowPersons onSelectPerson={selectPerson} />
    </Fragment>
  );
};

export default Formulaire;
