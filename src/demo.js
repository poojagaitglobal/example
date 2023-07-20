import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask } from '../UseSlices/todoSlice';
import {Formik ,Form,Field} from 'formik'

const List = () => {
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false);

    const user = useSelector((state) => state.todos.todos)
    console.log(user, 'user edited ')

    const [state, setState] = useState({
        id: '',
        todo: ''
    });
    
    const [updateData, setUPdateData] = useState({
        todo:'',
    });
       





    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const edit = () => {
        if (state.todo === '') {
            setState({ ...state });
            return;
        }
        dispatch(editTask(state));
        setEditing(false);
    }

    const onEditToggle = () => {

        setEditing(true);
        setState({ ...state, id:user?.id, todo:user?.todo });
          console.log(user.id ,"user id ");
          console.log(user.todo , "user todo");
    }

    return (
        <>


            <div>
                
                {user?.map(({ id, todo }) => {
                    return (
                        <li>
                            <span>{id}</span><br />
                            <span>{todo}</span>
                            {/* <div>
                          <input type='text' className='form-control' name='todo' value={todo} onChange={handleChange}/>
                        </div> */}
                            {editing ?
                                
                                <>
                                <Formik
                                    initialValues={updateData}
                                    
                                >
                                    <div>
                                        <input type='text' className='form-control' name='todo' value={state.todo} onChange={handleChange} />
                                        <button type='button' className='btn btn-success' onClick={edit}>UPDATE</button>
                                    </div>
                                </Formik>
                                </>
                                :
                                <button className="btn btn-warning" onClick={() => onEditToggle(id,todo)}>EDIT</button>
                            }
                            <button type="button" class="btn btn-danger" onClick={() => dispatch(deleteTask(id ,todo))} >Delete</button>
                        </li>
                        
                        )
                })
                }



    {/* ------------------------------------------------------------------------                */}


import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';

import { bookUpdated, deleteToDo, getToDo } from './ToDoSlice';

import { Field, Form, Formik } from 'formik';

import { Button, Modal } from 'react-bootstrap';




const ToDoList = () => {

    const disPatch = useDispatch();

    const [show, setShow] = useState(false);

    const [showDel, setShowDel] = useState(false);




    const handleClose = () => setShow(false);

    const handleCloseDel = () => setShowDel(false);

    const handleShowDel = (id) => {

        setShowDel(true)

        user.forEach(function (arrayItem) {

            if (arrayItem.id == id) {

                setObjstate({

                    id: arrayItem.id,

                    ToDo: arrayItem.ToDo

                })

            }

        })

    }

    const handleShow = (id) => {

        setShow(true)

        user.forEach(function (arrayItem) {

            if (arrayItem.id == id) {

                setObjstate({

                    id: arrayItem.id,

                    ToDo: arrayItem.ToDo

                })

            }

        })

    };

    const user = useSelector((state) => state.ToDo)




    const handleDelete = (id) => {

        console.log(id, '4878')

        const confirm = window.confirm("Are You Sure You Want Delete!!")

        if(confirm){

            disPatch(deleteToDo(id))

        }

        handleCloseDel()

    }


    const [objstate, setObjstate] = useState({

        id: '',

        ToDo: ""

    })

   const [inputData, setInputData] = useState({

        id: objstate.id,

        ToDo: objstate.ToDo

    })

    const handleChange = (e) => {

        setInputData(e.target.value)

    }

    const handleUpdate = (data) => {

        disPatch(bookUpdated(data),

        );

        console.log(inputData, '54545')

        handleClose()

    }

    return (

        <>

            <div className='main-header'>ToDo-List</div>

            {user?.map((book, i) => {

                return (

                    <div className="card" style={{ width: "98%", textAlign: "center", margin: "1%" }}>

                        <div className="card-body" key={i} id={book.id}>

                            <div key={i} id={book.id}>

                                <div className='d-flex flex-row '><div style={{ width: "35%" }}>ID</div><div style={{ width: "35%" }}>:</div><div style={{ width: "35%" }}>{book.id}</div></div>

                                <div className='d-flex flex-row '><div style={{ width: "35%" }}>ToDo</div><div style={{ width: "35%" }}>:</div><div style={{ width: "35%" }}>{book.ToDo}</div></div>

                                <div className='d-flex flex-row justify-content-center'>

                                    <div style={{ width: "6%" }}>

                                        <>

                                            <Button variant="warning" onClick={() => handleShow(book.id)}>

                                                UPDATE

                                            </Button>

                                            <Modal show={show} onHide={handleClose}>

                                                <Modal.Header closeButton>

                                                    <Modal.Title>UPDATE TODO</Modal.Title>

                                                </Modal.Header>

                                                <Modal.Body>

                                                    <Formik

                                                        initialValues={objstate}

                                                        enableReinitialize={true}

                                                        onSubmit={handleUpdate}

                                                    >

                                                        <Form className='form-css' onChange={(e) => handleChange(e)}>

                                                            <Field type="text" name="ToDo" className="form-control" />

                                                            <button type='submit' className='btn btn-primary' style={{ marginTop: "10px" }}>EDIT</button>

                                                        </Form>

                                                    </Formik>

                                                </Modal.Body>

                                            </Modal>

                                        </>

                                    </div>

                                    {/* <div style={{ width: "6%" }}><button className='btn btn-danger' onClick={() => handleDelete(book.id)}>DELETE</button></div> */}

                                    <>

                                        <Button variant="danger" onClick={() => handleShowDel(book.id)}>

                                            DELETE

                                        </Button>

                                        <Modal show={showDel} onHide={handleCloseDel}>

                                            <Modal.Header closeButton>

                                                <Modal.Title>DELETE-TODO</Modal.Title>

                                            </Modal.Header>

                                            <Modal.Body>

                                                {user?.map((arr) => {

                                                    return (

                                                        <div className='d-flex flex-row justify-content-between'>

                                                            <div>{arr.id}</div>

                                                            <div>{arr.ToDo}</div>

                                                            <div ><button className='btn btn-danger' onClick={() => handleDelete(arr.id)}>DELETE</button></div>

                                                        </div>

                                                    )

                                                })}

                                            </Modal.Body>

                                        </Modal>

                                    </>

                                </div>

                            </div>

                        </div>

                    </div>

                )

            })}




        </>

    )

}

export default ToDoList;



            </div>



        </>
    )
}

export default List