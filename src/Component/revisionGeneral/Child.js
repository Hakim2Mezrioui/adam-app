import { useState } from "react";

function Child(props) {
  const [salutation, setSalutation] = useState("Hello world");
  return (
    <>
      <h1>-- child --</h1>
        <input onChange={(e) => setSalutation(e.target.value)} />
      <button onClick={() => props.onMessage(salutation)}>Envoyer</button>
    </>
  );
}

export default Child;
