import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    initialState:[],
    name:"cart",
    reducers:{
        add(state, action){
         state.push(action.payload)
        },
        remove(state, action){
            return state.filter((item) => item.id !== action.payload)
        },
        drag(state, action){
            return action.payload
        }
        
    }

})

export const { add, remove, drag } = cartSlice.actions
export default cartSlice.reducer