import { createSlice } from "@reduxjs/toolkit";
import TodoList from "../components/TodoList";


export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [
            { id: 0, todo: "read" },
            { id: 1, todo: "write" }

        ]
    },

    reducers: {
        addTask: (state, action) => {
            console.log(action.payload, 'add task ')
            state.todos.push(action.payload);
        },
        deleteTask: (state, action) => {
            console.log(state.action?.payload, " delete task")
            // state.todos = state.todos.filter((item) =>item.id !==action.payload.id);
            const dev = state.todos.findIndex(({ id }) => id == action.payload)
            state.todos.splice(dev, 1)
        },

        editTask: (state, action) => {
            // state.todos.findIndex((data) => data.id == action.payload.id);
            // console.log(state, action.payload, " the enter data is")
            // return state.todos = [action.payload]

            const {id,todo } = action.payload;
            const existingUser = state.todos.find((user) => user.id === id);
            if (existingUser) {
                existingUser.todo = todo;
            }
          }

        
    }
});

export const { addTask, deleteTask, editTask } = todoSlice.actions
export default todoSlice.reducer;