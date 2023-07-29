import { createSlice } from "@reduxjs/toolkit";

let dataStore = createSlice({
    name: "data",
    initialState:[],

    reducers:{
        addPost:(state,action)=>{
            return [...state, action.payload]
        }
        ,
        removePost:(state,action)=>{
            return state.filter((d) => d.id !== action.payload);
        }
    }
})
export default dataStore.reducer
export const {addPost} = dataStore.actions
export const {removePost} = dataStore.actions