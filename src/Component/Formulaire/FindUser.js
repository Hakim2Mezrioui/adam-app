import { useEffect, useState, useSyncExternalStore } from "react";

const FindUser = (props) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        setUsers([...props.users]);
    }, [props.users]);

    function handleSearch (e) {
        const userFinded = users.find((item) => {
            console.log(item);
            return item.username === e.target.value;
        });

        setUser(userFinded);
    }

    return (
        <>
            <div>
                <input placeholder="find" onChange={handleSearch} />
                <button >Search</button>
            </div>
            {
                user ? <p>{user.email}</p> : <p>not found</p>
            }
        </>
    )
}

export default FindUser;