import React from "react";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import axios from "axios";

function editModal({ openEditModal, setOpenEditModal, setEditData, editData, getAllData }) {

    const handleUpdateData = async () => {
        try {
            await axios.put(`http://localhost:3001/todos/${editData.id}`, editData);

            setOpenEditModal(false);
            getAllData();
        } catch (error) {
            alert(error);
        }
    }


    return (
        <>
            <Modal
                show={openEditModal}
                onHide={() => setOpenEditModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo</Modal.Title>
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
                                    onChange={(e) => setEditData({...editData, title: e.target.value})}
                                    value={editData ? editData.title : ''}
                                    name="title"
                                    placeholder="Enter title..."
                                />
                            </Form.Group>
                            <Form.Group style={{marginTop: "10px"}}>
                                <Form.Label>Choose your age:</Form.Label>
                                <Form.Control
                                    style={{width: "25rem"}}
                                    as="select"
                                    onChange={(e) => setEditData({...editData, completed: e.target.value === 'true'})}
                                    name="completed"
                                    value={editData ? (editData.completed ? 'Done' : "Doing") : ''}
                                >
                                    <option value="false">Doing</option>
                                    <option value="true">Done</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setOpenEditModal(false)}>Close</Button>
                    <Button variant="primary" onClick={() => handleUpdateData()}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default editModal;