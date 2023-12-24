import { StyleEtatse } from "./StyleEtatse";
import { StyleTache } from "./StyleTache";

function Tache(props) {
  return (
    <>
      <StyleTache>
        <p>
          <b>Libelle: </b> {props.tache.libelle}{" "}
        </p>
        <StyleEtatse etat={props.tache.etat}>
          {props.tache.etat === 0 && (
            <>
              <input type="checkbox" />
              <label>pas encore</label>
            </>
          )}
          {props.tache.etat === 1 && (
            <>
              <input type="checkbox" />
              <label>encore</label>
            </>
          )}
          {props.tache.etat === 2 && (
            <>
              <input type="checkbox" />
              <label>fini</label>
            </>
          )}
        </StyleEtatse>
      </StyleTache>
    </>
  );
}

export default Tache;
