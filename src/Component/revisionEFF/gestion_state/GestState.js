import { useEffect, useState } from "react";
import swal from "sweetalert";

function StateComp() {
  // const [msg, setMsg] = useState("click here");
  let msg = "click here";
  const [val, setVal] = useState({});
  const [data, setData] = useState([]);

  const onClickHandler = () => {
    // setMsg("done !");
    msg = "done !";
    // alert(msg);
    const res = window.confirm("are you sure?")
    console.log(res); 
    // swal({
    //   title: "success",
    //   icon: "success",
    //   text: "good things"
    // })
    console.log(msg);
  };

  const onchangeHanlder = (e) => {
    const { name, value } = e.target;
    // setVal(e.target.value);

    setVal({
      ...val,
      [name]: value,
    });

    console.log(val);
  };

  useEffect(() => {
    console.log("without denpendcies");
  });
  useEffect(() => {
    console.log("with dependence");
  }, [msg]);
  useEffect(() => {
    console.log("with dependence empty");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        const dataRec = response.json();
        return dataRec;
      })
      .then((dataRec) => {
        console.log(dataRec);
        setData(dataRec);
      });
  }, []);

  return (
    <>
      <input name="val" onChange={onchangeHanlder} />
      <input name="val2" onChange={onchangeHanlder} />
      <input name="val3" onChange={onchangeHanlder} />
      <button onClick={onClickHandler}>{msg}</button>

      {val.val && val.val2 && val.val3 && (
        <>
          <p>val1: {val.val}</p>
          <p>val2: {val.val2}</p>
          <p>val3: {val.val3}</p>
        </>
      )}

      {data.map((todo) => (
        <>
          <h1>
            {todo.id}-{todo.title}
          </h1>
        </>
      ))}
    </>
  );
}
export default StateComp;
