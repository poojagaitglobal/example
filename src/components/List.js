import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask } from '../UseSlices/todoSlice';
import { Formik, Form, Field } from 'formik'
import { Button, Modal, ModalHeader } from 'react-bootstrap';


const List = () => {

    const user = useSelector((state) => state.todos.todos)
    console.log(user, 'the data')
    const dispatch = useDispatch();
    useEffect(()=>{

    },[user])

    const [showUp, setShowUp] = useState(false)

    const [showDel, setShowDel] = useState(false);


    const handleCloseDel = () => setShowDel(false);
    const handlCloseup = () => setShowUp(false);



    const handleDeleteShow = () => {
        setShowDel(true)
    }

    const handledeletetask = (id) => {
        console.log(id, " deleted id ")
        const confirm = window.confirm("Are You Sure You Want Delete!!")
        if (confirm) {
            dispatch(deleteTask(id))
        }

        handleCloseDel()

    }

    const handleUpdateShow = (id) => {
        setShowUp(true)

        user?.forEach(function (arrayItem) {

            if (arrayItem?.id == id) {

                setObjectState({
                    id: arrayItem?.id,
                    todo: arrayItem?.todo
                })
            }

        })

    }

    const [objectState, setObjectState] = useState({
        id: '',
        todo: ''
    })
    console.log(objectState, 'initial value');

    const [inputData, setinputData] = useState({
        id: objectState?.id,
        todo: objectState?.todo
    })
    console.log(inputData, " the showing updation")

    const handleChange = (e) => {
        setinputData(e.target.value)
    }
    const handleUpdatetask = (data) => {
        console.log(data, "updated id")
        dispatch(editTask(data));

        console.log(inputData, "after the updation")

        handlCloseup()

    }
    return (
        <>
            <div className='todo-main' >

                {user?.map((ele,index) => {
                    return (
                        <div className='todo-card-body' key={index} id={ele?.id}>
                            <div className='d-flex flex-row '>ID :{ele?.id}</div>
                            <div className='d-flex flex-row '>TASK :{ele?.todo}</div>

                            <Button variant="warning" onClick={() => handleUpdateShow(ele?.id)}>
                                UPDATE
                            </Button>

                            <Modal show={showUp} onHide={handlCloseup} >
                                <Modal.Header>
                                    <Modal.Title>UPDATE-TODO</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <Formik
                                        initialValues={objectState}
                                        enableReinitialize={true}
                                        onSubmit={handleUpdatetask}
                                    >

                                        <Form className='form-css' onChange={handleChange}>
                                            <Field type='text' name="todo" className="form-control" />
                                            <button type='submit' className='btn btn-primary' style={{ marginTop: "10px" }}>EDIT</button>

                                        </Form>
                                    </Formik>



                                </Modal.Body>

                            </Modal>



                            <>
                                <Button variant="danger" onClick={() => handleDeleteShow(ele.id)} >
                                    DELETE
                                </Button>

                                <Modal show={showDel} onHide={handleCloseDel}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>DELETE-TODO</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>

                                        {user.map((arr) => {
                                            return (
                                                <div className='d-flex flex-row justify-content-between' >
                                                    <div>ID:{arr.id}</div>
                                                    <div>TASK:{arr.todo}</div>
                                                     <button variant="danger" onClick={() => handledeletetask(arr.id)} >DELETE</button>
                                                </div>
                                            )
                                        })}
                                    </Modal.Body>


                                </Modal>

                            </>





                        </div>
                    )
                })}

            </div>

        </>


















        //    <>


        /* <div>
          <div>Todo List </div>
          
            {user?.map(({ book, i}) => {
                     return (
                         <li>
                                <div className='' key={i}  id={book.id}>
                                   <div className='d-flex flex-row '> <div>{book.id}</div> </div>
                                   <div className='d-flex flex-row '> <div>{book.todo}</div> </div>
                         //         </div> */
        //         {/* <div>
        // <input type='text' className='form-control' name='todo' value={todo} onChange={handleChange}/>
        // </div> */}
        /* {editing ?
                
                <>
                <Formik
                    initialValues={updateData}
                    enableReinitialize={true}
                    onSubmit={handleSubmit}
                >
                < Form onChange={handlChange}>
                    <Field type="text" name="id" className="form-control" value={state.id} disabled/>
                    <Field type='text' className='form-control'  name='todo' value={state.todo} />
                        <button type='submit' className='btn btn-success'>UPDATE</button>
                        </Form>
                </Formik>
                </>
                :
                <button className="btn btn-warning" onClick={() => onEditToggle(todo)}>EDIT</button>
            }
            <button type="button" class="btn btn-danger" onClick={() => dispatch(deleteTask(id ,todo))} >Delete</button>
        </li>
        
        )
})
// } */
        // {/* </div>



        // </> */}
    )
}

export default List