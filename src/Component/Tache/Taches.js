import { useState } from "react";
import listTaches from "./ListTaches.module";
import Tache from "./Tache";

function Taches() {
    const [taches, setTaches] = useState(listTaches);
    console.log(taches);

    return (
        <>
            {
                taches.map(function(tache) {
                    return (
                        <div key={tache.id}>
                            <Tache  tache={tache} />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Taches;