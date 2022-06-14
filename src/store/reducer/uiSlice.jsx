import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    itemToDo: []
}

const toDoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addToDoList(state, action) {
            const newItem = action.payload
            state.itemToDo.push({
                todo: newItem.todo,
                date: newItem.date,
                id: Math.random().toString()
            })
        },
        deleteFunc(state, action) {
            state.itemToDo = state.itemToDo.filter((el) => el.id !== action.payload)
        }
    }

})

export const toDoAction = toDoSlice.actions
export default toDoSlice

export const postToDo=()=>{
    return {
         
    }
}