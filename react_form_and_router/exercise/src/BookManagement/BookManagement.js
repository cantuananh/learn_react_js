import React, {useState} from "react";
import ShowBook from "./ShowBook";
import "../assets/css/book-management/style.css"

function BookManagement() {
    const [editingIndex, setEditingIndex] = useState(null);

    const [form, setForm] = useState({
        title: "",
        number: ""
    });

    const [books, setBooks] = useState([]);

    const [errors, setErrors] = useState({
        title: "",
        number: ""
    })

    function checkValidateTitleProperties(newErrors) {
        if (!form.title.trim()) {
            newErrors.title = "Required"
        } else {
            newErrors.title = "";
        }
    }

    function checkValidateNumberProperties(newErrors) {
        if (!form.number.trim()) {
            newErrors.number = "Required";
        } else if (!Number(parseInt(form.number))) {
            newErrors.number = "Data is not number. Try another data."
        } else {
            newErrors.number = "";
        }
    }

    const handleDeleteBook = (index) => {
        const newBooks = [...books];
        newBooks.splice(index, 1);
        setBooks(newBooks);
    }

    const handleEditBook = (index) => {
        setForm({...books[index]})
        setEditingIndex(index);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        let newErrors = {...errors};
        checkValidateTitleProperties(newErrors);
        checkValidateNumberProperties(newErrors);

        setErrors(newErrors);

        if (!Object.values(newErrors).some(error => error !== "")) {

            const newBook = {...form};

            if (editingIndex != null) {
                const newBooks = [...books];
                newBooks[editingIndex] = newBook;
                setBooks(newBooks);
            } else {
                setBooks([newBook, ...books]);
            }

            setForm({
                title: "",
                number: ""
            })

            setEditingIndex(null)

        }
    }

    const handleChangeData = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <>
            <div className={"container"}>
                <div className={"form"}>
                    <h1>Library</h1>
                    <form className={"form-check-input"} onSubmit={handleSubmitForm}>
                        <label htmlFor="title">Title: </label>
                        <input value={form.title} type="text" id={"title"} name={"title"} placeholder={"Title..."}
                               onChange={handleChangeData}/>
                        <span style={{color: "red"}} className={"error-message"}>
                            {errors.title && <span>{errors.title}</span>}
                        </span>
                        <br/>
                        <br/>
                        <label htmlFor="number">Number: </label>
                        <input value={form.number} type="text" id={"number"} name={"number"} placeholder={"Number..."}
                               onChange={handleChangeData}/>
                        <span className={"error-message"}
                              style={{color: "red"}}>{errors.number ? `${errors.number}` : ""}</span>
                        <br/>
                        <br/>
                        {(editingIndex != null) ? (
                            <button type={"submit"}>Update</button>
                        ) : (
                            <button type={"submit"}>Create</button>
                        )}
                    </form>
                </div>

                <div className={"list-book"}>
                    <ShowBook handleEditBook={handleEditBook} handleDeleteBook={handleDeleteBook} books={books}/>
                </div>
            </div>
        </>
    );
}

export default BookManagement;