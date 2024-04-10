import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function modalEditModal({ openModalEdit, setOpenModalEdit, getAllBooks, setEditBook, editBook }) {


    const handleUpdateBook = async () => {
        try {
            console.log(editBook);
            await axios.put(`http://localhost:3001/books/${editBook.id}`, editBook)
            await Swal.fire({
                title: "Update book successfully!",
                showConfirmButton: false,
                icon: "success",
                timer: 1000
            })
            setEditBook({});
            setOpenModalEdit(false);
            getAllBooks();
        } catch (error) {
            await Swal.fire({
                title: "Delete book successfully!",
                showConfirmButton: false,
                icon: "success",
                timer: 1000
            })
        }
    }

    return (
        <>
            <Modal
                show={openModalEdit}
                onHide={() => setOpenModalEdit(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{display: 'block', width: 700, padding: 30}}>
                        <Form>
                            <Form.Group>
                                <Form.Label>Enter name:</Form.Label>
                                <Form.Control
                                    style={{width: "25rem"}}
                                    type="text"
                                    onChange={(e) => setEditBook({...editBook, name: e.target.value})}
                                    value={editBook.name}
                                    name="name"
                                    placeholder="Enter name..."
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Enter detail:</Form.Label>
                                <Form.Control
                                    style={{width: "25rem"}}
                                    type="text"
                                    onChange={(e) => setEditBook({...editBook, detail: e.target.value})}
                                    value={editBook.detail}
                                    name="detail"
                                    placeholder="Enter detail..."
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Enter price:</Form.Label>
                                <Form.Control
                                    style={{width: "25rem"}}
                                    type="text"
                                    onChange={(e) => setEditBook({...editBook, price: e.target.value})}
                                    value={editBook.price}
                                    name="price"
                                    placeholder="Enter price..."
                                />
                            </Form.Group>
                            <Form.Group style={{marginTop: "10px"}}>
                                <Form.Label>Choose your status:</Form.Label>
                                <Form.Control
                                    style={{width: "25rem"}}
                                    as="select"
                                    onChange={(e) => setEditBook({...editBook, status: e.target.value})}
                                    name="status"
                                    value={editBook.status}
                                >
                                    <option value="available">available</option>
                                    <option value="out_of_stock">Out of stock</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setOpenModalEdit(false)}>Close</Button>
                    <Button variant="primary" onClick={() => handleUpdateBook()}>Update changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default modalEditModal;