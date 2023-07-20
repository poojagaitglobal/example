import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addTask } from '../UseSlices/todoSlice';
// import List from './List';
const TodoList = () => {
   const [value , setValue] = useState('');
   const dispatch = useDispatch()

      const todos =useSelector((state) =>state?.todos?.todos?.length)
         const onSubmit =()=>{
            console.log(value , "zawsexdrcftvgybhunj")   
            if(value.trim().length===0){

                alert("Enter the tsak before added");
                setValue("");
                return;
            
            }
            dispatch (addTask({
                id: todos+1,
                todo:value
            }))
              } 

                const handleChange = (e)=>{
                    setValue(e.target.value)
                }

  return (
    <>
      <div className=''><h2>TodoList</h2></div>
            <input type='text' placeholder='enter the task' value={value} onChange={handleChange} />
                <button  className='task-button' onClick={onSubmit} >Add</button>
                

                {/* <div
                    style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: "20px"
                    }}>

                 { todos.length === 0 ? (
                    <div>Todo List is Empty!</div>
                    ) : (
                    todos.map((item) => <List key={item.id} todo={item} />)
                  )}
                </div> */}
    </>
  )
}

export default TodoList