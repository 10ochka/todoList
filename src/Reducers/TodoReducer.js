import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from "@reduxjs/toolkit";

const initialState = { value: [] }
const [ add, del ] = [ ( arr, elem ) => arr.push( elem ), ( arr, id ) => arr.filter( elem => elem.id !== id ) ]

const todoReducerSlice = createSlice({
  name: 'TodoReducer',
  initialState,
  reducers: {
    addTodo: ( state, action ) => {
      add( state.value, action.payload )
    },
    delTodo: ( state, action ) => {
      state.value = del(state.value, action.payload.id )
    },
    editTodo: ( state, action ) => {
      state.value = del( state.value, action.payload.id )
      add( state.value, action.payload )
    },
  }
})

export const { addTodo, delTodo, editTodo } = todoReducerSlice.actions
export const store = configureStore({ reducer: { TodoReducer: todoReducerSlice.reducer, } })