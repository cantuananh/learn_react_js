import React from "react";
import {Table} from "react-bootstrap";

function ShowBook({books, handleDeleteBook, handleEditBook}) {
    return (
        <>
            <h1>List Books</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Number</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    books && books.length > 0 ? (
                        books.map((book, index) => (
                            <>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{book.title}</td>
                                    <td>{book.number}</td>
                                    <td>
                                        <button onClick={() => handleEditBook(index)} style={{marginRight: "5px"}}>edit</button>
                                        <button onClick={() => handleDeleteBook(index)}>delete</button>
                                    </td>
                                </tr>
                            </>
                        ))
                    )
                        : (
                            <>
                                <tr>
                                    <td colSpan={4}>Khong co du lieu</td>
                                </tr>
                            </>
                        )
                }
                </tbody>
            </Table>
        </>
    );

}

export default ShowBook;