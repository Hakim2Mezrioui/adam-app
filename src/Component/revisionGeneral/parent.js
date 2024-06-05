import { useState } from "react";
import Child from "./Child";

function Parent() {
    const [msg, setMsg] = useState();

  function message(value) {
    setMsg(value);
  }

  return (
    <>
      <h1>-- parent --</h1>
      <h2>Message: { msg }</h2>
      <Child onMessage={message} />
    </>
  );
}

export default Parent;
