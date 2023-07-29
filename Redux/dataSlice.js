import { createSlice } from "@reduxjs/toolkit";

let dataStore = createSlice({
    name: "data",
    initialState:[],

    reducers:{
        addData:(state,action)=>{
            return [action.payload]
        }
    }
})
export default dataStore.reducer
export const {addData} = dataStore.actions