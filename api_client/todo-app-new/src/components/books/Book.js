import React, {useEffect, useState} from "react";
import axios from "axios";
import ShowListBook from "./ShowListBook";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";

function book() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [books, setBooks] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openAddNewBookModal, setOpenAddNewBookModal] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        getAllBooks();
    }, [])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newBook, setNewBook] = useState({
        id: Math.floor(Math.random() * 1000).toString(),
        name: "",
        detail: "",
        price: 0,
        status: "",
    })

    const clickAddNewBook = () => {
        setOpenAddNewBookModal(true);
        console.log(newBook)
    }
    const handleCreateNewBook = (e) => {
        e.preventDefault();

        console.log(newBook)
    }

    async function getAllBooks() {
        const res = await axios.get("http://localhost:3001/books");
        const data = res.data;
        setBooks(data);
    }

    return (
        <>
            <div>
                <div className={"d-flex justify-content-center"}>
                    <h1>List book</h1>
                    <button onClick={clickAddNewBook} className={"btn btn-success"}>Add</button>
                </div>

                <div>
                   <ShowListBook getAllBooks={() => getAllBooks()} books={books} />
                    <Modal
                        show={openAddNewBookModal}
                        onHide={() => setOpenAddNewBookModal(false)}
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
                                            value={newBook.statu}
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
                </div>
            </div>
        </>
    );
}

export default book;