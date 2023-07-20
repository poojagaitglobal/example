import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './UseSlices/todoSlice';

export const store = configureStore({
    reducer :{
        todos: todoReducer
    }
})