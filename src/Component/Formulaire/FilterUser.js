import { Fragment, useState, useEffect } from "react";


const FilterUser = (props) => {    
    const [users, setUsers] = useState([]);
    const [userF, setUserF] = useState([]);

    useEffect(() => {
        setUsers([...props.users]);
    }, [props.users]);

    function handleSearch (e) {
        const userFiltred = users.filter((item) => {
            if(item.username.includes(e.target.value)) {
                return item;
            }
        });

        setUserF(userFiltred);
    }

    return (
        <>
            <div>
                <input placeholder="filter" onChange={handleSearch} />
                <button >Search</button>
            </div>
            <ul>
                {
                    userF && userF.map((user) => (
                        <li>{ user.email }</li>
                    ))
                }
            </ul>
        </>
    )
}

export default FilterUser;