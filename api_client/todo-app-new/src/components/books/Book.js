import React, {useEffect, useState} from "react";
import axios from "axios";
import ShowListBook from "./ShowListBook";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import AddBookModal from "./AddBookModal";

function book() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [books, setBooks] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openAddNewBookModal, setOpenAddNewBookModal] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        getAllBooks();
    }, [])

    const clickAddNewBook = () => {
        setOpenAddNewBookModal(true);
    }

    async function getAllBooks() {
        const res = await axios.get("http://localhost:3001/books");
        const data = res.data;
        setBooks(data);
    }

    return (<>
        <div>
            <div className={"d-flex justify-content-center"} style={{marginBottom: "10px", alignItems: "center"}}>
                <h1>List book</h1>
                <button style={{height: "36px", marginLeft: "20px"}} onClick={clickAddNewBook} className={"btn btn-success"}>Add</button>
            </div>
            <div>
                <ShowListBook getAllBooks={() => getAllBooks()} books={books}/>
                <AddBookModal openAddNewBookModal={openAddNewBookModal}
                              setOpenAddNewBookModal={setOpenAddNewBookModal}
                              getAllBooks={() => getAllBooks()} />
            </div>
        </div>
    </>);
}

export default book;