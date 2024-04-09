import React from "react";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import axios from "axios";

function deleteModal({openDeleteModal, setOpenDeleteModal, getAllData, deleteId}) {
    const handleDeleteData = async () => {
        await axios.delete(`http://localhost:3001/todos/${deleteId}`);
        setOpenDeleteModal(false);
        getAllData();
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