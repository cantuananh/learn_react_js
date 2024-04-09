import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Table } from "react-bootstrap";

function ShowInformationModal({ show, onHide, selectedTodo }) {
    // Kiểm tra nếu selectedTodo là null hoặc undefined
    if (!selectedTodo) {
        return null; // Trả về null nếu selectedTodo không tồn tại
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Todo information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {/*<td>{selectedTodo?.id}</td>*/}
                        <td>{selectedTodo?.title}</td>
                        <td>{selectedTodo?.completed ? "Done" : "Doing"}</td>
                    </tr>
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ShowInformationModal;
