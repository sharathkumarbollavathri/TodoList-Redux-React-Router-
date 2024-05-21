import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload.text,
        goalTime: action.payload.goalTime,
        addedDate: new Date().toISOString(),
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    completeTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = true;
      }
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
  },
});

export const { addTodo, deleteTodo, completeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;







// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   todos: [],
// };

// const todoSlice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       state.todos.push({
//         id: nanoid(),
//         text: action.payload.text,
//         goalTime: action.payload.goalTime,
//         addedDate: new Date().toISOString(),
//         completed: false,
//       });
//     },
//     deleteTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
//     },
//     completeTodo: (state, action) => {
//       const todo = state.todos.find((todo) => todo.id === action.payload.id);
//       if (todo) {
//         todo.completed = true;
//       }
//     },
//     updateTodo: (state, action) => {
//       const todo = state.todos.find((todo) => todo.id === action.payload.id);
//       if (todo) {
//         todo.text = action.payload.text;
//       }
//     },
//   },
// });

// export const { addTodo, deleteTodo, completeTodo, updateTodo } = todoSlice.actions;

// export default todoSlice.reducer;









// import { createSlice,nanoid } from "@reduxjs/toolkit";   //nanoid takes unique ids

// const initialState = {
//     todos:[{
//         id:1,
//         text:"Hello World!",
//         // goalTime:null,
//         // addedDate:null
//     }]
// }

// const todoSlice = createSlice({
//     name:'todo',
//     initialState,
//     reducers:{
//         addTodo:(state,action)=>{
//             state.todos.push({
//                 id:nanoid(),
//                 text:action.payload.text,
//                 // goalTime:action.payload.goalTime,
//                 // addedDate:new Date().toISOString()
//             })
//         },
        
//         deleteTodo:(state,action)=>{
//             state.todos = state.todos.filter(todo=>todo.id!==action.payload.id)
//         },

//         // updateTodo:(state,action)=>{
//         //     state.todos=state.todos.map(todo=>todo.id===action.payload.id?action.payload:todo)
//         // },


//     }
// })

// export const {addTodo,deleteTodo} = todoSlice.actions

// export default todoSlice.reducer;