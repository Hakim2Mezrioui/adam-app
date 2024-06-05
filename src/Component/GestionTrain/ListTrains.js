import { useEffect, useState } from "react";
import { trains } from "./data.module";

const ListTrains = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(trains);
    }, []);

    return (
        <ul>
            {
                data.map((train) => (
                    <li>{train.nom}</li>
                ))
            }
        </ul>
    )
}

export default ListTrains;