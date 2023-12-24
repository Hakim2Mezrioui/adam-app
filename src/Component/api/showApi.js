import { useEffect } from "react";

function ShowApi() {

    useEffect(function() {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(function(data) {
            return data.json();
        }).then(function(dataJs) {
            console.log(dataJs);
        }).catch(function(error) {
            console.log(error);
        }).finally(function() {
            console.log("done");
        })
    }, []);

    return (
        <>
        
        </>
    )
}

export default ShowApi;