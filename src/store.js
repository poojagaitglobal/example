
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './UseSlices/todoSlice';

export const store = configureStore({
    reducer :{
        todos: todoReducer
    }
})

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

