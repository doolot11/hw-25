import { configureStore } from "@reduxjs/toolkit"
import toDoSlice from "./reducer/uiSlice"

const store = configureStore({
    reducer: {
        todo: toDoSlice.reducer
    }
})
export default store