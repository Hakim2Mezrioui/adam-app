import { Fragment, useState } from "react";
import styles from "./FormUser.module.css";
import FindUser from "./FindUser";
import FilterUser from "./FilterUser";

function Form() {
  const [user, setUser] = useState({
    username: "",
    email: "",
  });
  const [users, setUsers] = useState([]);

  function handleBlur(e) {
    // const [name, value] = [e.target.name, e.target.value];

    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user, // spread
      [name]: value,
    });
  }

  function handleDelete(index) {
    users.splice(index, 1);
    setUsers([...users]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (user.username === "" || user.email === "") {
      return; // break
    }

    setUsers([...users, user]);

    setUser({
      username: "",
      email: "",
    });

    // document.getElementById("userForm").reset();
    // or
    document.querySelector("#userForm").reset();
  }

  return (
    <Fragment>
      <form id="userForm" onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            className={
              user.username === "" ? styles["is-not-valid"] : styles["is-valid"]
            }
            value={user.name}
            name="username"
            onChange={handleBlur}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            className={
              user.email === "" ? styles["is-not-valid"] : styles["is-valid"]
            }
            value={user.email}
            name="email"
            onChange={handleBlur}
          />
        </div>
        <div>
          <button>Ajouter</button>
        </div>
      </form>

      {
        // user.username === "hakim" && <p>Hello World!</p> // if
        // user.username === "hakim" ? <p>Hello Hakim</p> : <p>you're welcome</p> // if else 
        // user.username === "hakim" ? <p>Hello Hakim</p> : user.username === "adam" ? <p>Hello Adam</p> :  <p>you're welcome</p> // if elseif else 
    }

      <ul>
        {users.map(function (user, i) {
          return (
            <>
              <li>{user.email}</li>
              <button onClick={() => handleDelete(i)}>supprimer</button>
            </>
          );
        })}
      </ul>

      <FindUser users={users} />
      <FilterUser users={users} />
    </Fragment>
  );
}

export default Form;