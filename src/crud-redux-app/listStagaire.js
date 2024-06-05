import { useDispatch, useSelector } from "react-redux";
import { editer, supprimer } from "./actions";

const ListStagaire = () => {
    const stagiaires = useSelector(state => state.stagiaires);
    const dispatch = useDispatch();

    return (
        <table className="table-bordered">
            <tr>
                <th>id</th>
                <th>matricule</th>
                <th>nom</th>
                <th>ville</th>
                <th>codePostal</th>
                <th>Moyenne</th>
                <th>supprimer</th>
                <th>editer</th>
            </tr>
            {
                stagiaires.map((stagiaire, index) => (
                    <tr key={index}>
                        <td>{ stagiaire.id }</td>
                        <td>{ stagiaire.matricule }</td>
                        <td>{ stagiaire.nom }</td>
                        <td>{ stagiaire.ville }</td>
                        <td>{ stagiaire.codePostal }</td>
                        <td>{ stagiaire.moyenne }</td>
                        <td>
                            <button onClick={() => dispatch(editer(stagiaire))}>editer</button>
                            <button onClick={() => dispatch(supprimer(stagiaire.id))}>supprimer</button>
                        </td>
                    </tr>
                ))
            }
        </table>
    )
}

export default ListStagaire;