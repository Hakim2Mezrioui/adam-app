import { useState } from "react";

function Events() {
  const ps = "pass123";

  const [entryPassword, setEntryPassword] = useState();

  function checker() {
    if(ps === entryPassword) {
        console.log("check successfully");
    } else {
        console.log("check faild");
    }
  }

  function onChangeHandler(e) {
    setEntryPassword(e.target.value);
  }

  return (
    <>
      <div>
        <label>Password</label>
        <input onChange={onChangeHandler} placeholder="Password" />
      </div>
      <div>
        <button onClick={checker}>valider</button>
      </div>
    </>
  );
}
export default Events;
