import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function UserDetails() {
  const todos = useSelector((state) => state.todo.todos);
  const { id } = useParams();

  console.log(id)
  // Find the specific todo item by id
  const todo = todos.find((todo) => todo.id === id);

  return (
    <div>
      {/* <h1>Details about Todo</h1> */}
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





// import React from 'react'
// import {useParams} from 'react-router-dom'
// import { useSelector } from 'react-redux'



// export default function UserDetails({todos}) {
//     const todos = useSelector((state) => state.todo.todos);

//     const {userId}=useParams()
//   return (
//     <div>
//         <h1>Details about user {userId}</h1>
//         <h2>{
//                     todos.map((todo) => (
//                         <li key={todo.id} >
                            
//                                 {todo.text}
                            
//                         </li>
//                     ))
//                 }
//                 </h2>
//     </div>
//   )
// }
