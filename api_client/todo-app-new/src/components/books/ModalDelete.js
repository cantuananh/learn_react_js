import React from "react";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import axios from "axios";

function modalDelete({ openModalDelete, setOpenModalDelete, getAllBooks, idDelete }) {
    const handleDeleteBook = async () => {
        await axios.delete(`http://localhost:3001/books/${idDelete}`);
        setOpenModalDelete(false);
        getAllBooks();
    }


    return (
        <>
            <Modal
                show={openModalDelete}
                onHide={() => setOpenModalDelete(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>You sure delete this data?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setOpenModalDelete(false)}>Close</Button>
                    <Button variant="danger" onClick={handleDeleteBook}>Yes, delete it</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default modalDelete;