import { createSlice,nanoid } from "@reduxjs/toolkit";



const initialState = {
 todos:[{ id:1, text: 'hello' }]  
}


// Slice is nothing just huge virson of reducers
// An action is an object that describes what changes need to be made to the state of your application. It sends data from your application to the Redux store and serves as the only way to update the store.



export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers:{
      addTodo: (state,action)=>{
        const todo={
          id:nanoid(),
          text: action.payload
       }
       state.todos.push(todo)
      },
    
      removeTodo: (action,state)=>{
        state.todos = state.todos.filter((todo)=>
          todo.id !== action.payload
        )
      }
    }
})


export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer