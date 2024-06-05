import { useState } from "react";
import AutoCounter from "./autoCounter";

function Toggle() {
  const [isShow, setIsShow] = useState(true);

  return (
    <>
      {isShow && <AutoCounter />}
      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
    </>
  );
}

export default Toggle;
