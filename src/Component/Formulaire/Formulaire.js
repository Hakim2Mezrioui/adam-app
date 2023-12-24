import { useState } from "react";

function Formulaire() {
  const [infoForm, setInfoForm] = useState({});

  const [afficher, setAfficher] = useState(false);

  function handleChange(event) {
    console.log(event);
    const { name, value } = event.target; // destruction d'objet
    setInfoForm({ ...infoForm,  [name]: value });
    console.log(infoForm);
  }

  function handleSumbit(e) {
    e.preventDefault();

    setAfficher(true);
  }

  return (
    <>
      <form onSubmit={handleSumbit}>
        <div>
          <label htmlFor="nom">nom</label>
          <input onBlur={handleChange} id="nom" name="nom" />
        </div>
        <div>
          <label htmlFor="prenom">prenom</label>
          <input onBlur={handleChange} id="prenom" name="prenom" />
        </div>
        <div>
          <label htmlFor="dateDeNaissance">dateDeNaissance</label>
          <input
            onBlur={handleChange}
            type="date"
            id="dateDeNaissance"
            name="dateDeNaissance"
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input onBlur={handleChange} type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            onBlur={handleChange}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div>
          <button disabled={!infoForm.nom && infoForm.nom === ""}>Envoyer</button>
        </div>
      </form>

      {
        afficher && infoForm.nom ? (
            <div>
            <span style={{ display: "flex", alignItems: "center", gap: "1em" }}>
                <h3>Nom :</h3>
                <p>{infoForm.nom}</p>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "1em" }}>
                <h3>prenom :</h3>
                <p>{infoForm.prenom}</p>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "1em" }}>
                <h3>date de naissance :</h3>
                <p>{infoForm.dateDeNaissance}</p>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "1em" }}>
                <h3>email :</h3>
                <p>{infoForm.email}</p>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "1em" }}>
                <h3>password :</h3>
                <p>{infoForm.password}</p>
            </span>
            </div>
        ) : <h1>Information Not Found</h1>
      }

      {
        // condition ? "if do this" : "else do this"
        // false ? <h1>true</h1> : <h1>false</h1>
      }
    </>
  );
}

export default Formulaire;
