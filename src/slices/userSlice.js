import { createSlice } from "@reduxjs/toolkit"


const initialState =[
    {id: "1" , name:"pooja sahu",email :"pooja@gmail.com" },
    {id: "2", name: "manoj", email: "manoj@gmail.com"  }

];




const userSlice = createSlice({
    name: "users",
    initialState,
    reducer :{
        userAdded(state , action){
            state.push(action.payload);
        },
    },


});

export const {userAdded} = userSlice.actions;
export default userSlice.reducer;