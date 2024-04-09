import React from "react";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";

function showModal({openViewModal, setOpenViewModal, dataViewDetail}) {
    return (
        <>
            <Modal
                show={openViewModal}
                onHide={() => setOpenViewModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>View details Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{
                        display: 'block',
                        width: 700,
                        padding: 30
                    }}>
                        {dataViewDetail != null ? (
                            <>
                                <p>
                                    ID: {dataViewDetail?.id} - Title: {dataViewDetail?.title} - Status: {dataViewDetail?.completed ? "Done" : "Doing" }
                                </p>
                            </>
                        ) : ("Khong co du lieu")}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setOpenViewModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default showModal;