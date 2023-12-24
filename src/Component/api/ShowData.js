import { useEffect, useState } from "react";
import { data } from "./data";
// import {data as d} from "./data";

function ShowData() {
  // const [dataRec, setDataRec] = useState(data);
  const [dataRec, setDataRec] = useState([]);

  useEffect(function () {
    setDataRec([...data]);
    console.log(dataRec);
  }, []);

  return (
    <>
      <table className="table table-primary">
        <tr className="">
          <th>brand</th>
          <th>model</th>
          <th>screen_size</th>
          <th>processor</th>
          <th>highlights</th>
        </tr>
          {dataRec.map(function (laptop) {
            return (
              <tr>
                <td>
                        {laptop.brand}
                </td>
                <td>
                    {laptop.model}
                </td>
                <td>
                    {laptop.screen_size}
                </td>
                <td>
                    {laptop.processor}
                </td>
                <td>
                    {laptop.highlights}
                </td>
              </tr>
            );
          })}
      </table>
    </>
  );
}

export default ShowData;
