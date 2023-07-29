import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./saveSlice"

export const store = configureStore({
    reducer:{
     data: dataSlice
    }
})

