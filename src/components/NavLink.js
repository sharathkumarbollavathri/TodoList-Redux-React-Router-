// NavLink.js
import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function NavLink() {
  const { id } = useParams();
  const navigate=useNavigate()
  const todo = useSelector((state) => state.todo.todos.find((todo) => todo.id === id));

  return (
    <div className="container">
      <div className="container-fluid p-0 mt-2 mb-5">
         <div className="text-center">
        <center>
          <h1 className="d-inline ms-5">User Details</h1>
          <button className="d-inline float-end btn me-1 mt-2 btn-info" onClick={() => navigate(-1)}><FontAwesomeIcon icon={faCircleArrowLeft} /></button>
           </center>
        </div>
      </div>
      {todo && (
        <div>
          <p><strong>Task:</strong> {todo.text}</p>
          <p><strong>Added Date:</strong> {new Date(todo.addedDate).toLocaleString()}</p>
          <p><strong>Goal Time:</strong> {todo.goalTime}</p>
        </div>
      )}
    </div>
  );
}



// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Outlet ,useNavigate} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';


// export default function NavLink() {
//   const navigate=useNavigate()
//   const todos = useSelector((state) => state.todo.todos);
//   // const { id } = useParams();

//   // const todo = todos.find((todo) => todo.id === id);


//   return (
//     <>
//       <div className="container-fluid p-0 mt-2 mb-5">
//         {/* <div className="text-center"> */}
//         <center>
//           <h1 className="d-inline ms-5">User Details</h1>
//           <button className="d-inline float-end btn me-3 mt-2 btn-info" onClick={() => navigate(-1)}><FontAwesomeIcon icon={faCircleArrowLeft} /></button>
//           </center>
//         {/* </div> */}
//       </div>

//       <center>
//       <div>
//         <ul>
//           {todos.map((todo) => (
//             <li className='list' key={todo.id}>
//               {/* <Link to={`/navlink/${todo.id}`}>{todo.text}</Link> */}
//               {todo && (
//         <div>
//           <p><strong>Task:</strong> {todo.text}</p>
//           <p><strong>Added Date:</strong> {new Date(todo.addedDate).toLocaleString()}</p>
//           <p><strong>Goal Time:</strong> {todo.goalTime}</p>
//         </div>
//       )}
//       <hr className='mx-5 '/>
//             </li>
//           ))}
//         </ul>
//       </div>
//       </center>
//       <Outlet />
//     </>
//   );
// }







// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Outlet } from 'react-router-dom'
// import {useParams} from  'react-router-dom'
// import {Link} from 'react-router-dom'

// export default function NavLink({todos}) {
//     const todos = useSelector((state) => state.todo.todos);
//     // const {userId}=useParams()

//     return (
//     <>
//         <div>
//             <h1>User Details </h1>
//         </div>
//         <div>
//             <h2>
//                 {
//                     todos.map((todo) => (
//                         <li key={todo.id} >
                            
//                                 <Link to={`/todos/${todo.id}`}>{todo.text}</Link>
                            
//                         </li>
//                     ))
//                 }
//             </h2>

//         </div>
//         <Outlet />
//     </>
//     )
// }
