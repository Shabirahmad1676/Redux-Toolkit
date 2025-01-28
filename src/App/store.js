import {configureStore}  from '@reduxjs/toolkit'
// import todoReducer from '../features/todo/todoSlice'
import { counterSlice } from '../features/counter/counterSlice'

export const store = configureStore({
  // reducer: todoReducer,counterSlice
  reducer:{
    counter:counterSlice
  }
})