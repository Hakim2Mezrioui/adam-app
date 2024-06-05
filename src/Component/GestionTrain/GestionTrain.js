import { Fragment, useState } from "react";
import RecherchTrain from "./RecherchTrain";
import InfoTrain from "./InfosTrain";
import AddTrain from "./AddVille";
import ListTrains from "./ListTrains";

const GestionTrain = () => {
    const [idt, setIdT] = useState();
    const getIdTrain = (id) => {
        setIdT(id);
    }

    return (
        <Fragment>
            <RecherchTrain onGetIdTrain={getIdTrain} />
            <InfoTrain idTrain={idt} />
            <AddTrain />
            <ListTrains />
        </Fragment>
    )
}

export default GestionTrain;