import { configureStore } from "@reduxjs/toolkit";
import {  applyMiddleware, combineReducers } from "redux";
import todoSlice from "./slices/todoSlice";
import userSlice from "./slices/userSlice";

// const reducer = combineReducers({
//     reducer,
// })

const store = configureStore({
    // reducer:todoSlice
    reducer :userSlice
} 
);

export default store;
