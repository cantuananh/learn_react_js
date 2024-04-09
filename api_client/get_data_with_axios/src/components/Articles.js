import React, {useEffect, useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Table} from "react-bootstrap";

const Articles = () => {
    const [listArticle, setListArticle] = useState(null);
    const [newArticle, setNewArticles] = useState({
        id: "",
        title: "",
        user_id: ""
    });

    const [editArticle, setEditArticle] = useState(null);

    useEffect(() => {
        getListArticle();
    }, [])

    const handleAddNewArticles = async () => {
        try {
            const res = await axios.post("http://localhost:3001/api/articles", {
                ...newArticle
            })

            setListArticle([res.data, ...listArticle]);
            setNewArticles({
                id: "",
                title: "",
                user_id: ""
            });

        } catch (error) {
            console.log(error)
        }
    }

    const handleEditArticle = (article) => {
        setEditArticle(article);
    }

    const handleDelete = async (id) => {
        try {
            console.log("xoa")
            await axios.delete(`http://localhost:3001/api/articles/${id}`)
            setListArticle(listArticle.filter(article => article.id !== id))
        } catch (error) {
            console.log(error);
        }
    }

    const getListArticle = async () => {
        try {
            const res = await axios.get("http://localhost:3001/api/articles");
            const data = res.data;
            setListArticle(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div>
                <h1>List articles</h1>
                <input type="id"
                       placeholder={"Enter id..."}
                       value={newArticle.id}
                       onChange={(e) => setNewArticles({...newArticle, id: e.target.value})}
                />
                <input type="text"
                       placeholder={"Enter title..."}
                       value={newArticle.title}
                       onChange={(e) => setNewArticles({...newArticle, title: e.target.value})}
                />
                <input type="id"
                       placeholder={"Enter user id..."}
                       value={newArticle.user_id}
                       onChange={(e) => setNewArticles({...newArticle, user_id: e.target.value})}
                />
                <Button variant="success" onClick={handleAddNewArticles}>Add</Button>{' '}

                <div>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <td>#</td>
                            <td>title</td>
                            <td>User id</td>
                            <td>Action</td>
                        </tr>
                        </thead>
                        <tbody>
                        {listArticle != null ? (
                            listArticle.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.user_id}</td>
                                    <td>
                                        <button className={"btn btn-warning"} style={{marginRight: "5px"}} onClick={() => handleEditArticle(item)}>Edit</button>
                                        <button className={"btn btn-danger"} onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}>No data</td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );

}

export default Articles;