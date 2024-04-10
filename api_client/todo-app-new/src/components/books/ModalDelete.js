import React from "react";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import axios from "axios";
import Swal from 'sweetalert2'

function modalDelete({ openModalDelete, setOpenModalDelete, getAllBooks, idDelete }) {
    const handleDeleteBook = async () => {
        try {
            await axios.delete(`http://localhost:3001/books/${idDelete}`);
            await Swal.fire({
                title: "Delete success a new book!",
                icon: "success",
                showConfirmButton: false,
                timer: 1000
            });
            setOpenModalDelete(false);
            getAllBooks();
        } catch (error) {
            await Swal.fire({
                title: "Delete book failed!",
                text: "You clicked the button!",
                icon: "error",
            });
        }
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