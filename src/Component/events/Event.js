function Event() {
    
    function clickMe(who) {
        console.log("clicked by " + who)
    }

    function handleChange(e) {
        console.log(e.target.value);
    }

    return (
        <>
            <input onChange={handleChange} />
            <input onChange={(event) => handleChange(event)} />
            <br/>
            <button onClick={clickMe}>Click Me</button>
            <button onClick={() => clickMe("button 1")}>button 1</button>
            <button onClick={() => clickMe()}>button 2</button>
        </>
    )
}

export default Event;