import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAdded } from "../slices/userSlice";


export function AddUser(){
  
  const dispatch = useDispatch();
  

  const [email , setEmail] = useState("");
  
  const handleEmail = (e) =>setEmail(e.target.value);
 
  const userAmount = useSelector((state) => state.length);
    

  const handleClick = () =>{
    if (name && email){
        dispatch( userAdded({
            id: userAmount + 1,
           
            email,
        })
        )}
       
        }


 return(
    <div className="conatiner">
        <div className="row" >
          <h1>Add User</h1>
        </div>
        <div className="row">
            <div className="three coloumns">
            
            <label htmlFor="">Email</label>
            <input type="text" placeholder="email" id="nameInput" value={email} onChange={handleEmail} />
             
             <button className="button-primary" onClick={handleClick}>Add User</button>
         

            </div>
        </div>

    </div>
 
    )

}

export default AddUser;