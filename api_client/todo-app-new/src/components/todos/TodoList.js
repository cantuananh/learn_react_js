import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Button} from "react-bootstrap";
import AddTodoModal from "./AddTodoModal";
import ShowListTodo from "./ShowListTodo";


function TodoList() {
    const [datas, setDatas] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const [nameSearch, setNameSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);


    useEffect(() => {
        console.log("isSearching changed:", isSearching);
        getAllData();
    }, [isSearching]);

    const getAllData = async () => {
        try {
            const res = await axios.get("http://localhost:3001/todos");

            const data = res.data;
            setDatas(data);
        } catch (error) {
            alert(error);
        }
    }

    const handleSubmitFormSearch = (e) => {
        e.preventDefault();
        const filterData = datas.filter(todo => todo.title.toLowerCase().includes(nameSearch.toLowerCase()));
        setSearchResults(filterData);
        setIsSearching(true);

    }

    const handleCancelSearch = () => {
        setNameSearch("");
        setSearchResults(datas);
        setIsSearching(false);
    }

    return (
        <>
            <div>
                <div className={"d-flex justify-content-center"}>
                    <h1>List todo</h1>
                    <div style={{marginLeft: "5px"}}>
                        <Button className={"btn btn-success"} onClick={() => setOpenModal(!openModal)}>Add</Button>

                        <AddTodoModal openModal={openModal} setOpenModal={setOpenModal}
                                      getAllData={() => getAllData()}/>
                    </div>
                </div>
                <form onSubmit={handleSubmitFormSearch}>
                    <input type="text" placeholder={"Enter the name todo..."} value={nameSearch} onChange={(e) => setNameSearch(e.target.value)}/>
                    {isSearching ? (
                        <button type="button" className="btn btn-danger" style={{ marginLeft: "5px" }} onClick={handleCancelSearch}>Cancel</button>
                    ) : (
                        <button type="button" className="btn btn-primary" style={{ marginLeft: "5px" }} onClick={handleSubmitFormSearch}>Search</button>
                    )}
                </form>

                <ShowListTodo datas={isSearching ? searchResults : datas} getAllData={() => getAllData()}/>
            </div>
        </>
    );
}

export default TodoList;