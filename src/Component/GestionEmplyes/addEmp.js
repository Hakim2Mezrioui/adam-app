import { useState } from "react";
import { addEmploye } from "./actions";
import { useDispatch } from "react-redux";

const AddEmp = () => {
  const [emp, setEmp] = useState({});
  const dispatch = useDispatch();

  const onHandleBlure = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setEmp({
      ...emp,
      [name]: value,
    });
  };

  const onAdd = (e) => {
    e.preventDefault();
    dispatch(addEmploye(emp));
    document.getElementById("form").reset();
  };

  return (
    <form id="form" className={`w-25`} onSubmit={onAdd}>
      <div>
        <label>Numero</label>
        <input
          className={`form-control`}
          name="numero"
          onBlur={onHandleBlure}
        />
      </div>
      <div>
        <label>Nom</label>
        <input className={`form-control`} name="nom" onBlur={onHandleBlure} />
      </div>
      <div>
        <label>Prenom</label>
        <input
          className={`form-control`}
          name="prenom"
          onBlur={onHandleBlure}
        />
      </div>
      <div>
        <label>Date Naissance</label>
        <input
          className={`form-control`}
          name="dateNaissance"
          onBlur={onHandleBlure}
        />
      </div>
      <div>
        <label>Addresse</label>
        <input
          className={`form-control`}
          name="addresse"
          onBlur={onHandleBlure}
        />
      </div>
      <button className={`btn btn-success`}>add</button>
    </form>
  );
};

export default AddEmp;
