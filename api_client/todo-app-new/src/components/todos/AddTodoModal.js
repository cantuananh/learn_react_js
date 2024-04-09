import React, {useState} from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";

function addTodoModal({openModal, setOpenModal, getAllData}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newData, setNewData] = useState({
        id: Math.floor(Math.random() * 1000).toString(),
        title: "",
        completed: false
    })


    const handleAddNewData = async () => {
        try {
            await axios.post("http://localhost:3001/todos", newData);
            setNewData({
                id: Math.floor(Math.random() * 1000),
                title: "",
                completed: false
            });
            setOpenModal(false);
            getAllData();
        } catch (error) {
            alert(error);
        }
    }

    const handleChangeStatus = (e) => {
        const {name, value} = e.target;

        setNewData(prevState => ({
            ...prevState,
            [name]: value === "true"
        }));
    }

    const handleChangeTitle = (e) => {
        const {name, value} = e.target;

        setNewData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <>
            <Modal
                show={openModal}
                onHide={() => setOpenModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{
                        display: 'block',
                        width: 700,
                        padding: 30
                    }}>
                        <Form>
                            <Form.Group>
                                <Form.Label>Enter title:</Form.Label>
                                <Form.Control
                                    style={{width: "25rem"}}
                                    type="text"
                                    onChange={handleChangeTitle}
                                    value={newData.title}
                                    name="title"
                                    placeholder="Enter title..."
                                />
                            </Form.Group>
                            <Form.Group style={{marginTop: "10px"}}>
                                <Form.Label>Choose your age:</Form.Label>
                                <Form.Control
                                    style={{width: "25rem"}}
                                    as="select"
                                    onChange={handleChangeStatus}
                                    name="completed"
                                    value={newData.completed ? "true" : "false"}
                                >
                                    <option value="false">Doing</option>
                                    <option value="true">Done</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setOpenModal(false)}>Close</Button>
                    <Button variant="primary" onClick={handleAddNewData}>Save changes</Button>
                </Modal.Footer>
            </Modal>

        </>
    );

}

export default addTodoModal;