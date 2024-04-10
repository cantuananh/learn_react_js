import React from "react";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function deleteModal({openDeleteModal, setOpenDeleteModal, getAllData, deleteId}) {
    const handleDeleteData = async () => {
        try {
            await axios.delete(`http://localhost:3001/todos/${deleteId}`);
            await Swal.fire({
                title: "Delete success a new book!",
                icon: "success",
                showConfirmButton: false,
                timer: 1000
            });
            setOpenDeleteModal(false);
            getAllData();
        } catch (error){
            await Swal.fire({
                title: "Update book failed!",
                text: "You clicked the button!",
                icon: "error",
            });
        }
    }


    return (
        <>
            <Modal
                show={openDeleteModal}
                onHide={() => setOpenDeleteModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>You sure delete this data?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setOpenDeleteModal(false)}>Close</Button>
                    <Button variant="danger" onClick={handleDeleteData}>Yes, delete it</Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default deleteModal;