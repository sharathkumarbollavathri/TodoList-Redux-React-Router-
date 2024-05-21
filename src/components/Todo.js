// Todo.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, completeTodo, updateTodo } from "../features/todo/toodSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Todo() {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [updatedText, setUpdatedText] = useState({});

  const handleUpdate = (id) => {
    if (updatedText[id]) {
      dispatch(updateTodo({ id, text: updatedText[id] }));
      setUpdatedText({ ...updatedText, [id]: "" });
    }
  };

  const showTodoDetails = (id) => {
    navigate(`/navlink/${id}`);
  };

  return (
    <div className="container">
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className={`list-group-item ${todo.completed ? "list-group-item-success" : ""}`} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            <div className="d-flex justify-content-between align-items-center">
              <span>{todo.text}</span>
              <div>
                {todo.goalTime && new Date() > new Date(todo.goalTime) && <span className="badge goal">Task TimeOut</span>}
                <span className="badge addDate mx-1">AddedOn: {new Date(todo.addedDate).toLocaleString()}</span>
                <button className="btn btn-sm complete mx-1" onClick={() => dispatch(completeTodo({ id: todo.id }))}>Complete</button>
                <button className="btn btn-sm delete mx-1" onClick={() => dispatch(deleteTodo({ id: todo.id }))}>
                  <FontAwesomeIcon icon={faTrashAlt} style={{ color: "white" }} />
                </button>
                <button className="btn btn-sm mx-1 view" onClick={() => showTodoDetails(todo.id)}>
                  <FontAwesomeIcon icon={faEye} />
                </button>
                {!todo.completed && (
                  <>
                    <input
                      type="text"
                      className="form-control d-inline-block w-auto"
                      value={updatedText[todo.id] || ""}
                      onChange={(e) => setUpdatedText({ ...updatedText, [todo.id]: e.target.value })}
                    />
                    <button className="btn btn-sm btn-warning mx-1" onClick={() => handleUpdate(todo.id)}>Update</button>
                  </>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}



// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteTodo, completeTodo, updateTodo } from "../features/todo/toodSlice";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashAlt,faEye } from '@fortawesome/free-solid-svg-icons';
// // import {Routes,Route, NavLink} from 'react-router-dom'
// import {Outlet, useNavigate} from 'react-router-dom'

// export default function Todo() {
//   const navigate= useNavigate()
//   const todos = useSelector((state) => state
//   .todo.todos);
//   const dispatch = useDispatch();
//   const [updatedText, setUpdatedText] = useState({});

//   const handleUpdate = (id) => {
//     if (updatedText[id]) {
//       dispatch(updateTodo({ id, text: updatedText[id] }));
//       setUpdatedText({ ...updatedText, [id]: "" });
//     }
//   };
//   const showTodoDetails=(id)=>{
//     // console.log(todos.id)
//     navigate(`/navlink/${id}`)
//   }



//   return (
//     <div className="container ">
//       <ul className="list-group">
//         {todos.map((todo) => (
//           <li key={todo.id} className={` list-group-item ${todo.completed ? "list-group-item-success " : ""}`} style={{ textDecoration: todo.completed ? "line-through" : "none" }} >
//             <div className="d-flex justify-content-between align-items-center">
//               <span className="bg-light">{todo.text}</span>



//               <div>
//                 {todo.goalTime && new Date() > new Date(todo.goalTime) && <span className="badge goal">Task TimeOut</span>}
//                 <span className="badge addDate mx-1">AddedOn :  {new Date(todo.addedDate).toLocaleString()}</span>
//                 <button className="btn btn-sm complete mx-1" onClick={() => dispatch(completeTodo({ id: todo.id }))}>Complete</button>
//                 <button className="btn btn-sm delete mx-1" onClick={() => dispatch(deleteTodo({ id: todo.id }))}>
//                   <FontAwesomeIcon icon={faTrashAlt} style={{ color: "white" }}/>
//                 </button>
//                 <button className="btn btn-sm mx-1 view" onClick={showTodoDetails}><FontAwesomeIcon icon={faEye} /></button>
//                 {!todo.completed && (
//                   <>
//                     <input
//                       type="text"
//                       className="form-control d-inline-block w-auto"
//                       value={updatedText[todo.id] || ""}
//                       onChange={(e) => setUpdatedText({ ...updatedText, [todo.id]: e.target.value })}
//                     />
//                     <button className="btn btn-sm btn-warning mx-1" onClick={() => handleUpdate(todo.id)}>Update</button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <Outlet/>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteTodo, completeTodo, updateTodo } from "../features/todo/toodSlice";

// export default function Todo() {
//   const todos = useSelector((state) => state.todo.todos);
//   const dispatch = useDispatch();

//   const [updatedText, setUpdatedText] = useState({});

//   const handleUpdate = (id) => {
//     if (updatedText[id]) {
//       dispatch(updateTodo({ id, text: updatedText[id] }));
//       setUpdatedText({ ...updatedText, [id]: "" });
//     }
//   };

//   return (
//     <div className="container">
//       {/* <h1 className="text-center mt-5 mb-4">Todo List</h1> */}
//       <ul className="list-group">
//         {todos.map((todo) => (
//           <li key={todo.id} className={`list-group-item ${todo.completed ? "list-group-item-success " : ""}`}style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
//             <div className="d-flex justify-content-between align-items-center">
//               <span>{todo.text}</span>
//               <div>
//                 {todo.goalTime && new Date() > new Date(todo.goalTime) && <span className="badge bg-danger">Time completed</span>}
//                 <span className="badge bg-secondary mx-1">Added: {new Date(todo.addedDate).toLocaleString()}</span>
//                 <button className="btn btn-sm btn-primary mx-1" onClick={() => dispatch(completeTodo({ id: todo.id }))}>Complete</button>
//                 <button className="btn btn-sm btn-danger mx-1" onClick={() => dispatch(deleteTodo({ id: todo.id }))}>Delete</button>
//                 <input
//                   type="text"
//                   className="form-control d-inline-block w-auto"
//                   value={updatedText[todo.id] || ""}
//                   onChange={(e) => setUpdatedText({ ...updatedText, [todo.id]: e.target.value })}
//                 />
//                 <button className="btn btn-sm btn-warning mx-1" onClick={() => handleUpdate(todo.id)}>Update</button>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteTodo, completeTodo, updateTodo } from "../features/todo/toodSlice";

// export default function Todo() {
//   const todos = useSelector((state) => state.todo.todos);
//   const dispatch = useDispatch();
//   const [updatedText, setUpdatedText] = useState({});

//   const handleUpdate = (id) => {
//     if (updatedText[id]) {
//       dispatch(updateTodo({ id, text: updatedText[id], addedDate: new Date().toISOString() }));
//       setUpdatedText({ ...updatedText, [id]: "" });
//     }
//   };

//   useEffect(() => {
//     const now = new Date();
//     todos.forEach((todo) => {
//       if (todo.goalTime && new Date(todo.goalTime) <= now && !todo.completed) {
//         dispatch(completeTodo({ id: todo.id }));
//       }
//     });
//   }, [todos, dispatch]);

//   return (
//     <div className="container mt-5">
//       <ul className="list-group">
//         {todos.map((todo) => (
//           <li key={todo.id} className={`list-group-item ${todo.completed ? "list-group-item-success" : ""}`}>
//             <div className="d-flex justify-content-between align-items-center">
//               <span>{todo.text}</span>
//               <div>
//                 {todo.completed && <span className="badge bg-success">Completed</span>}
//                 <span className="badge bg-secondary mx-1">Added: {new Date(todo.addedDate).toLocaleString()}</span>
//                 <button className="btn btn-sm btn-danger mx-1" onClick={() => dispatch(deleteTodo({ id: todo.id }))}>Delete</button>
//                 <input
//                   type="text"
//                   className="form-control d-inline-block w-auto"
//                   value={updatedText[todo.id] || ""}
//                   onChange={(e) => setUpdatedText({ ...updatedText, [todo.id]: e.target.value })}
//                 />
//                 <button className="btn btn-sm btn-warning mx-1" onClick={() => handleUpdate(todo.id)}>Update</button>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteTodo, completeTodo, updateTodo } from "../features/todo/toodSlice";

// export default function Todo() {
//   const todos = useSelector((state) => state.todo.todos);
//   const dispatch = useDispatch();
//   const [updatedText, setUpdatedText] = useState({});

//   const handleUpdate = (id) => {
//     if (updatedText[id]) {
//       dispatch(updateTodo({ id, text: updatedText[id] }));
//       setUpdatedText({ ...updatedText, [id]: "" });
//     }
//   };

//   useEffect(() => {
//     const now = new Date();
//     todos.forEach((todo) => {
//       if (todo.goalTime && new Date(todo.goalTime) <= now && !todo.completed) {
//         dispatch(completeTodo({ id: todo.id }));
//       }
//     });
//   }, [todos, dispatch]);

//   return (
//     <div className="container mt-5">
//       <ul className="list-group">
//         {todos.map((todo) => (
//           <li key={todo.id} className={`list-group-item ${todo.completed ? "list-group-item-success" : ""}`}>
//             <div className="d-flex justify-content-between align-items-center">
//               <span>{todo.text}</span>
//               <div>
//                 {todo.completed && <span className="badge bg-success">Completed</span>}
//                 <span className="badge bg-secondary mx-1">Added: {new Date(todo.addedDate).toLocaleString()}</span>
//                 <button className="btn btn-sm btn-danger mx-1" onClick={() => dispatch(deleteTodo({ id: todo.id }))}>Delete</button>
//                 <input
//                   type="text"
//                   className="form-control d-inline-block w-auto"
//                   value={updatedText[todo.id] || ""}
//                   onChange={(e) => setUpdatedText({ ...updatedText, [todo.id]: e.target.value })}
//                 />
//                 <button className="btn btn-sm btn-warning mx-1" onClick={() => handleUpdate(todo.id)}>Update</button>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }









// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteTodo, completeTodo, updateTodo } from "../features/todo/toodSlice";

// export default function Todo() {
//   const todos = useSelector((state) => state.todo.todos);
//   const dispatch = useDispatch();

//   const [updatedText, setUpdatedText] = useState({});

//   const handleUpdate = (id) => {
//     if (updatedText[id]) {
//       dispatch(updateTodo({ id, text: updatedText[id] }));
//       setUpdatedText({ ...updatedText, [id]: "" });
//     }
//   };

//   return (
//     <>
//       <div>
//         {todos.map((todo) => (
//           <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
//             {todo.text}
//             {todo.goalTime && new Date() > new Date(todo.goalTime) && <span> - Time completed</span>}
//             <span> - Added: {new Date(todo.addedDate).toLocaleString()}</span>
//             <button onClick={() => dispatch(completeTodo({ id: todo.id }))}> Complete </button>
//             <button onClick={() => dispatch(deleteTodo({ id: todo.id }))}> Delete </button>
//             <input
//               type="text"
//               value={updatedText[todo.id] || ""}
//               onChange={(e) => setUpdatedText({ ...updatedText, [todo.id]: e.target.value })}
//             />
//             <button onClick={() => handleUpdate(todo.id)}> Update </button>
//           </li>
//         ))}
//       </div>
//     </>
//   );
// }


// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteTodo } from '../features/todo/toodSlice';

// export default function Todo() {
//     const todos = useSelector(state => state.todo.todos);
//     const dispatch = useDispatch();

//     return (
//         <>
//             <div>
//                 {/* <h1>Todo List</h1> */}
//                 {todos.map(todo => (
//                     <li key={todo.id}>
//                         <div>{todo.text}</div>
//                         <div>Goal Time: {todo.goalTime}</div>
//                         <div>Added Date: {todo.addedDate}</div>
//                         <button onClick={() => dispatch(deleteTodo({ id: todo.id }))}> X </button>
//                     </li>
//                 ))}
//             </div>
//         </>
//     );
// }




// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteTodo } from '../features/todo/toodSlice';

// export default function Todo() {
//     // Correctly select the todos array from the state
//     const todos = useSelector(state => state.todo.todos); // Assuming `todo` is the name of your slice

//     const dispatch = useDispatch();

//     return (
//         <>
//             <div>
                
//                 {todos.map(todo => (
//                     <li key={todo.id}>
//                         {todo.text}
//                         <button onClick={() => dispatch(deleteTodo({id:todo.id}))}> X </button>
//                     </li>
//                 ))}
//             </div>
//         </>
//     );
// }
