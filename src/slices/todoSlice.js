import {createSlice} from "@reduxjs/toolkit"


const initialState =[
 {id: "1" , name:"pooja sahu",email :"pooja@gmail.com" },
 {id: "2", name: "manoj", email: "manoj@gmail.com"  }

]; 
    


const todoSlice = createSlice({
      name :"users",
      initialState,
      reducers:{
    

      },      

});

export default todoSlice.reducer;