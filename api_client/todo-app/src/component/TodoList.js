import React, {useEffect, useState} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import "../assets/css/style.css";
import ShowInformationModal from "./ShowInformationModal";
import DeleteModal from "./DeleteModal";


function TodoList() {
    let count = 0;

    let [todos, setTodos] = useState(null);
    let [showDeleteModal, setShowDeleteModal] = useState(false);
    const [todoToDelete, setTodoToDelete] = useState(null);
    const [showToast, setShowToast] = useState(false);

    const [showInformationModal, setShowInformationModal] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);


    useEffect(() => {
        getTodos();
    }, []);

    async function getTodos() {
        try {
            const res = await axios.get("http://localhost:3001/todos");

            const data = res.data;

            setTodos(data);
        } catch (error) {
            alert(error);
        }
    }

    const handleViewTodo = (todo) => {
        setShowInformationModal(true);
        setSelectedTodo(todo);
    }

    const handleDeleteData = async () => {
        try {
            console.log(todoToDelete.id)
            await axios.delete(`http://localhost:3001/todos/${todoToDelete.id}`);
            const updatedTodos = todos.filter(todo => todo.id !== todoToDelete.id);
            setTodos(updatedTodos);
            setShowDeleteModal(false);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 2000);
        } catch (error) {
            alert("Error: " + error);
        }
    }


    return (
        <>
            <div style={{width: "60%", margin: "0 auto"}}>
                <div className={"d-flex justify-content-center mt-5"}>
                    <h1>List to do</h1>
                    <button style={{marginBottom: "10px"}} className={"btn btn-success"}>
                        <Link className={"text-white"} style={{textDecoration: "none"}} to={"/add"}>
                            Add
                        </Link></button>
                </div>
                <div>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Complete</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {todos !== null ? (

                            todos.map(item => (
                                <tr key={item.id}>
                                    <td>{count++}</td>
                                    <td>{item.title}</td>
                                    <td>{item.completed ? "Done" : "Doing"}</td>
                                    <td>
                                        <button className={"btn btn-primary"} style={{marginRight: "5px"}}
                                                onClick={() => handleViewTodo(item)}>View
                                        </button>
                                        <button className={"btn btn-warning"} style={{marginRight: "5px"}}>Edit</button>
                                        <button className={"btn btn-danger"} onClick={() => {
                                            setShowDeleteModal(true);
                                            setTodoToDelete(item)
                                        }
                                        }>Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}>No data.</td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </div>
            </div>

            <DeleteModal show={showDeleteModal}
                         handleClose={()=>setShowDeleteModal(false)}
                         handleDelete={handleDeleteData()}
                         todoToDelete={todoToDelete}
            ></DeleteModal>

            <ShowInformationModal
                show={showInformationModal}
                onHide={() => setShowInformationModal(false)}
                selectedTodo={selectedTodo}
            ></ShowInformationModal>

            {showToast && (
                <div className="toast">Todo deleted successfully!</div>
            )}
        </>
    );
}

export default TodoList;