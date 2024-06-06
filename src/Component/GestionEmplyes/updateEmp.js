import { useEffect, useState } from "react";
import { updateEmploye } from "./actions";
import { useDispatch, useSelector } from "react-redux";

const UpdateEmp = () => {
  const [emp, setEmp] = useState({});
  const dispatch = useDispatch();
  const updatingEmp = useSelector((state) => state.updatingEmp);

  useEffect(() => {
    setEmp(updatingEmp);
  }, [updatingEmp]);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setEmp({
      ...emp,
      [name]: value,
    });
  };

  const onUpdate = (e) => {
    e.preventDefault();
    dispatch(updateEmploye(emp));
    setEmp({});
    document.getElementById("form").reset();
  };

  return (
    <form id="form" className={`w-25`} onSubmit={onUpdate}>
      <div>
        <label>Numero</label>
        <input
          value={emp.numero}
          className={`form-control`}
          name="numero"
          onChange={onHandleChange}
        />
      </div>
      <div>
        <label>Nom</label>
        <input
          value={emp.nom}
          className={`form-control`}
          name="nom"
          onChange={onHandleChange}
        />
      </div>
      <div>
        <label>Prenom</label>
        <input
          value={emp.prenom}
          className={`form-control`}
          name="prenom"
          onChange={onHandleChange}
        />
      </div>
      <div>
        <label>Date Naissance</label>
        <input
          value={emp.dateNaissance}
          className={`form-control`}
          name="dateNaissance"
          onChange={onHandleChange}
        />
      </div>
      <div>
        <label>Addresse</label>
        <input
          value={emp.addresse}
          className={`form-control`}
          name="addresse"
          onChange={onHandleChange}
        />
      </div>
      <button className={`btn btn-success`}>update</button>
    </form>
  );
};

export default UpdateEmp;
