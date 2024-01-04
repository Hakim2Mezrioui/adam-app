import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAppend, onDelete } from "./ImmerActions";

const ImmerApp = () => {
    // const [courses, setCourses] = useState([]);
    const courses = useSelector((state) => state.courses);
    const nameRedux = useSelector(state => state.nameOfRedux)
    const [course, setCourse] = useState();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setCourse(e.target.value);
    }

    const handleAppend = () => {
        // setCourses([...courses, course]);
        dispatch(onAppend(course));
        setCourse('');
    }

  return (
    <>
      <h1>{ nameRedux }</h1>
      <div>
        <input value={course} onChange={handleChange} />
        <button onClick={handleAppend}>append</button>
      </div>

      <ul>
        {courses.map((c, index) => {  
          return <li key={index}> 
              <h1> { c } </h1>
              <button onClick={() => dispatch(onDelete(index))}>remove</button>
           </li> 
        })}
      </ul>
    </>
  );
};

export default ImmerApp;
