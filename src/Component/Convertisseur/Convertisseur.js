import { useState } from "react";
import Resultat from "./Resultat";
import Saisi from "./Saisi";

function Convertisseur() {
    const [montant, setMontant] = useState(0);

    function montantConvertir(montant) {
        setMontant(montant * 11);
    }



    return (
        <>
            <Saisi onMontantConvertir={montantConvertir} />
            <Resultat montantMAD={montant} />
        </>
    )
}

export default Convertisseur;