import React, {useEffect, useState} from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function AddTodoForm() {
    const [todoData, setTodoData] = useState({
        id: null,
        title: "",
        completed: false
    });

    useEffect(() => {
        if (!todoData.id) {
            setTodoData(prevState => ({
                ...prevState,
                id: generateUniqueId()
            }));
        }
    }, [todoData]);

    const handleSubmitFormCreate = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3001/todos", todoData);
            console.log("Todo add: " + res.data);
            window.location.href = "/list";
        } catch (error) {
            alert("Error: " + error);
        }
    };

    const handleChangeStatus = (e) => {
        const { name, value } = e.target;
        setTodoData(prevState => ({
            ...prevState,
            [name]: value === "true"
        }));
    };

    const handleChangeTitle = (e) => {
        const { name, value } = e.target;
        setTodoData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <div>
                <h1>Create form</h1>
                <div
                    style={{
                        display: 'block',
                        width: 700,
                        padding: 30,
                        margin: "0 auto"
                    }}
                >
                    <Form onSubmit={handleSubmitFormCreate}>
                        <Form.Group>
                            <Form.Label>Enter title:</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={handleChangeTitle}
                                value={todoData.title}
                                name="title"
                                placeholder="Enter title..."
                            />
                        </Form.Group>
                        <Form.Group style={{ marginTop: "10px" }}>
                            <Form.Label>Choose your age:</Form.Label>
                            <Form.Control
                                as="select"
                                onChange={handleChangeStatus}
                                name="completed"
                                value={todoData.completed ? "true" : "false"}
                            >
                                <option value="false">Doing</option>
                                <option value="true">Done</option>
                            </Form.Control>
                        </Form.Group>

                        <Button style={{ marginTop: "10px" }} variant="primary" type="submit">
                            Create
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default AddTodoForm;
