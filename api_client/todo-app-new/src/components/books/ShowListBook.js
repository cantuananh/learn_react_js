import React, {useState} from "react";
import Table from "react-bootstrap/Table";
import ModalDelete from "./ModalDelete";

function showListBook({books, getAllBooks}) {
    let count = 1;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [idDelete, setIdDelete] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openModalDelete, setOpenModalDelete] = useState(false);

    const clickButtonDelete = (id) => {
        setIdDelete(id);
        setOpenModalDelete(true);
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Detail</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {books !== null ? (
                    books.map(book => (
                        <tr key={book.id}>
                            <td>{count++}</td>
                            <td>{book.name}</td>
                            <td>{book.detail}</td>
                            <td>{book.price}</td>
                            <td>{book.status}</td>
                            <td>
                                <button className={"btn btn-primary"} style={{marginRight: "5px"}}>Edit</button>
                                <button className={"btn btn-danger"} onClick={() => clickButtonDelete(book.id)}>Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <>
                    <tr>
                        <td colSpan={4}></td>
                    </tr>
                    </>
                )}
                </tbody>
            </Table>
            <ModalDelete idDelete={idDelete} getAllBooks={() => getAllBooks()} openModalDelete={openModalDelete}
                         setOpenModalDelete={setOpenModalDelete}/>
        </div>

    );

}

export default showListBook;