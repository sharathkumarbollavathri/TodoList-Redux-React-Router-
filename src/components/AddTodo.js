import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/toodSlice";
import { Outlet, useNavigate } from 'react-router-dom'
import Todo from "./Todo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function AddTodo() {
  const navigate = useNavigate()
  const [input, setInput] = useState("");
  const [goalTime, setGoalTime] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      dispatch(addTodo({ text: input, goalTime }));
      setInput("");
      setGoalTime("");


    }
    else {
      alert('Enter Task details')
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };



  return (
    <>
      <div className="container-fluid p-0 mt-2 mb-5">
        <div className="text-center">
          <h1 className="d-inline ">Todo</h1>
          <button className="d-inline float-end btn mx-4 mt-2 btn-info" onClick={() => navigate(-1)}><FontAwesomeIcon icon={faCircleArrowLeft} /></button>
        </div>
      </div>

      <div className="container">
        <form onSubmit={addTodoHandler}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a Todo..."
              value={input}
              onChange={(handleInputChange)}
            />
          </div>
          <div className="mb-3">
            <input
              type="datetime-local"
              className="form-control"
              value={goalTime}
              placeholder="Set Goal Time.."
              onChange={(e) => setGoalTime(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-5" >Add Todo</button>
        </form>
        <Todo />
      </div>
      <Outlet />
    </>
  );
}



// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTodo } from "../features/todo/toodSlice";

// export default function AddTodo() {
//   const [input, setInput] = useState("");
//   const [goalTime, setGoalTime] = useState("");

//   const dispatch = useDispatch();

//   const addTodoHandler = (e) => {
//     e.preventDefault();
//     dispatch(addTodo({ text: input, goalTime }));
//     setInput("");
//     setGoalTime("");
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">Todo List</h1>
//       <form onSubmit={addTodoHandler}>
//         <div className="mb-3">
//           <label className="form-label">Task</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter a Todo..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Goal Time</label>
//           <input
//             type="datetime-local"
//             className="form-control"
//             value={goalTime}
//             onChange={(e) => setGoalTime(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Add Todo</button>
//       </form>
//     </div>
//   );
// }





// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTodo } from "../features/todo/toodSlice";

// export default function AddTodo() {
//   const [input, setInput] = useState("");
//   const [goalTime, setGoalTime] = useState("");

//   const dispatch = useDispatch();

//   const addTodoHandler = (e) => {
//     e.preventDefault();
//     dispatch(addTodo({ text: input, goalTime }));
//     setInput("");
//     setGoalTime("");
//   };

//   return (
//     <div className="container">
//       <h1 className="text-center mt-5 mb-4">Todo List</h1>
//       <form onSubmit={addTodoHandler}>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter a Todo..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="datetime-local"
//             className="form-control"
//             value={goalTime}
//             onChange={(e) => setGoalTime(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Add Todo</button>
//       </form>
//     </div>
//   );
// }








// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTodo } from "../features/todo/toodSlice";

// export default function AddTodo() {
//   const [input, setInput] = useState("");
//   const [goalTime, setGoalTime] = useState("");

//   const dispatch = useDispatch();

//   const addTodoHandler = (e) => {
//     e.preventDefault();
//     dispatch(addTodo({ text: input, goalTime }));
//     setInput("");
//     setGoalTime("");
//   };

//   return (
//     <>
//       <h1>Todo List</h1>
//       <form onSubmit={addTodoHandler}>
//         <input
//           type="text"
//           placeholder="Enter a Todo..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <input
//           type="datetime-local"
//           value={goalTime}
//           onChange={(e) => setGoalTime(e.target.value)}
//         />
//         <button type="submit">Add Todo</button>
//       </form>
//     </>
//   );
// }










// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addTodo} from '../features/todo/toodSlice'

// export default function AddTodo() {

//     const [input,setInput]=useState('')
//     const dispatch=useDispatch()

//     const addTodoHandler=(e)=>{
//         e.preventDefault()
//         dispatch(addTodo(input))
//         setInput('')
//     }

//   return (
//     <>
//       <h1>Todo List</h1>
//         <form onSubmit={addTodoHandler}>
//             <input type="text" placeholder='Enter a Todo...' value={input} onChange={(e)=>setInput(e.target.value)}/>
//             <button type="submit">Add Todo</button>
//         </form>
//     </>
//   )
// }
