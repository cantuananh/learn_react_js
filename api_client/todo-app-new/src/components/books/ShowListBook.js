import React, {useState} from "react";
import Table from "react-bootstrap/Table";
import ModalDelete from "./ModalDelete";
import axios from "axios";
import ModalEditModal from "./ModalEditModal";
import {FaCheckCircle} from "react-icons/fa";
import button from "bootstrap/js/src/button";
import Swal from "sweetalert2";

function showListBook({books, getAllBooks}) {
    let count = 1;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [idDelete, setIdDelete] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openModalDelete, setOpenModalDelete] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openModalEdit, setOpenModalEdit] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [editBook, setEditBook] = useState({});

    const clickButtonDelete = (id) => {
        setIdDelete(id);
        setOpenModalDelete(true);
    }

    const clickButtonEdit = async (id) => {
        setOpenModalEdit(true);
        try {
            const res = await axios.get(`http://localhost:3001/books/${id}`)
            const data = res.data;
            setEditBook(data);
        } catch (error) {
            alert(error);
        }
    }

    const updateRevertStatus = async (id, newStatus) => {
        try {
            const currentBook = books.find(book => book.id === id);
            const updateBook = {...currentBook, status: newStatus};

            await axios.put(`http://localhost:3001/books/${id}`, updateBook);
            await Swal.fire({
                title: "Update status successfully!",
                icon: "success",
                showConfirmButton: false,
                timer: 1000
            })
            getAllBooks();
        } catch (error) {
            await Swal.fire({
                title: "Update status failed!",
                icon: "error",
                text: "You clicked the button!",
            })
        }
    }

    return (
        <div style={{width: "70%", margin: "0 auto"}}>
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
                {Array.isArray(books) && books.length > 0 ? (
                    books.map(book => (
                        <tr key={book.id}>
                            <td>{count++}</td>
                            <td>{book.name}</td>
                            <td>{book.detail}</td>
                            <td>{book.price}</td>
                            <td>{book.status === "available" ? (
                                <button style={{border: "none", background: "none"}}
                                        onClick={() => updateRevertStatus(book.id, 'out_of_stock')}>
                                    <FaCheckCircle title={"Available"} style={{color: "green"}}/>
                                </button>
                            ) : (
                                <button onClick={() => updateRevertStatus(book.id, 'available')}
                                        style={{border: "none", background: "none"}}>
                                    <FaCheckCircle title={"Out of stock"} style={{color: "grey"}}/>
                                </button>
                            )}</td>
                            <td>
                                <button className={"btn btn-primary"} style={{marginRight: "5px"}}
                                        onClick={() => clickButtonEdit(book.id)}>Edit
                                </button>
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
            <ModalDelete idDelete={idDelete}
                         getAllBooks={() => getAllBooks()}
                         openModalDelete={openModalDelete}
                         setOpenModalDelete={setOpenModalDelete}/>
            <ModalEditModal openModalEdit={openModalEdit}
                            setOpenModalEdit={setOpenModalEdit}
                            getAllBooks={() => getAllBooks()}
                            setEditBook={setEditBook}
                            editBook={editBook}/>
        </div>
    );

}

export default showListBook;
