import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode, supprimer } from "./action";

const ShowPersons = (props) => {
  const pers = useSelector(state => state.persons);
  const dispatch = useDispatch();

  const handleDelete = (i) => {
    dispatch(supprimer(i));
  }

  const handleModifier = (i, person) => {
    props.onSelectPerson(i, person);
    dispatch(changeMode("modifier"));
  }

  return (
    <Fragment>
      <ul>
        {pers.map((person, index) => (
          <li key={index}>
            {person.name} - {person.age}
            <button onClick={() => handleDelete(index)}>Supprimer</button>
            <button onClick={() => handleModifier(index, person)}>modifier</button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ShowPersons;
