import { useDispatch, useSelector } from "react-redux";
import { deleteEmploye, editEmploye } from "./actions";

const ListEmps = () => {
  const emps = useSelector((state) => state.employes);
  const dispatch = useDispatch();

  const onDeleteHandler = (i) => {
    dispatch(deleteEmploye(i));
  };

  const onEditHanlder = (emp, index) => {
    dispatch(editEmploye({emp, index}));
  };

  return (
    <ul>
      {emps.map((e, i) => (
        <li key={i}>
          <div>
            <h3>
              {e.nom} {e.prenom}
            </h3>
            <p>{e.addresse}</p>
            <p>{e.dateNaissance}</p>
            <p>{e.numero}</p>
            <button
              onClick={() => onDeleteHandler(i)}
              className={`btn btn-danger`}
            >
              Delete
            </button>
            |
            <button onClick={() => onEditHanlder(e, i)} className={`btn btn-info`}>
              Edit
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListEmps;