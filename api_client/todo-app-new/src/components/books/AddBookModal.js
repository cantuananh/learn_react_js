import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import axios from "axios";
import Swal from 'sweetalert2'

function addBookModal({ openAddNewBookModal, setOpenAddNewBookModal, getAllBooks }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newBook, setNewBook] = useState({
        id: Math.floor(Math.random() * 1000).toString(),
        name: "",
        detail: "",
        price: 0,
        status: "available",
    })

    const handleCreateNewBook = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3001/books/", newBook);
            await Swal.fire({
                title: "Add success a new book!",
                icon: "success",
                showConfirmButton: false,
                timer: 1000
            });
            setNewBook({
                id: Math.floor(Math.random() * 1000).toString(),
                name: "",
                detail: "",
                price: 0,
                status: "available",
            });
            setOpenAddNewBookModal(false);
            getAllBooks();
        } catch (error) {
            await Swal.fire({
                title: "Add book failed!",
                text: "You clicked the button!",
                icon: "error",
            });
        }
    }

    return (
        <>
            <Modal
                show={openAddNewBookModal}
                onHide={() => setOpenAddNewBookModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add a new book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{
                        display: 'block', width: 700, padding: 30
                    }}>
                        <Form>
                            <Form.Group>
                                <Form.Label>Enter name:</Form.Label>
                                <Form.Control
                                    style={{width: "25rem"}}
                                    type="text"
                                    onChange={(e) => setNewBook({...newBook, name: e.target.value})}
                                    value={newBook.name}
                                    name="name"
                                    placeholder="Enter name..."
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Enter detail:</Form.Label>
                                <Form.Control
                                    style={{width: "25rem"}}
                                    type="text"
                                    onChange={(e) => setNewBook({...newBook, detail: e.target.value})}
                                    value={newBook.detail}
                                    name="detail"
                                    placeholder="Enter detail..."
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Enter price:</Form.Label>
                                <Form.Control
                                    style={{width: "25rem"}}
                                    type="text"
                                    onChange={(e) => setNewBook({...newBook, price: e.target.value})}
                                    value={newBook.price}
                                    name="price"
                                    placeholder="Enter price..."
                                />
                            </Form.Group>
                            <Form.Group style={{marginTop: "10px"}}>
                                <Form.Label>Choose your status:</Form.Label>
                                <Form.Control
                                    style={{width: "25rem"}}
                                    as="select"
                                    onChange={(e) => setNewBook({...newBook, status: e.target.value})}
                                    name="status"
                                    value={newBook.status}
                                >
                                    <option value="available">available</option>
                                    <option value="out_of_stock">Out of stock</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setOpenAddNewBookModal(false)}>Close</Button>
                    <Button variant="primary" onClick={handleCreateNewBook}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default addBookModal;