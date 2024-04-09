// Trong component GetDataAxios.js

import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";

function GetDataAxios() {
    const [userData, setUserData] = useState(null);
    const [editUser, setEditUser] = useState(null);
    const [newUser, setNewUser] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:3001/api/users");
            const data = response.data;
            setUserData(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleEditUser = (user) => {
        setEditUser(user);
    };

    const handleSaveEdit = () => {
        try {
            alert(JSON.stringify(editUser, null, 3));
            getData();
            setEditUser(null);
        } catch (error) {
            console.error('Error saving edit:', error);
        }
    };

    const handleCreateNewUser = async () => {
        if (newUser !== "") {
            try {
                setLoading(true);
                const res = await axios.post("http://localhost:3001/api/users", {
                    name: newUser
                });

                const addNewUser = res.data;

                setUserData([addNewUser, ...userData]);
                setNewUser("")
                setLoading(false);
            } catch (error) {
                console.log(error)
            }
        } else {
            alert("Please enter the name create...")
        }
    }

    return (
        <div>
            <h1>Danh sách users</h1>
            <input type="text"
                   value={newUser}
                   onChange={(e) => setNewUser(e.target.value)}
            />
            <button className={"btn btn-success"} onClick={handleCreateNewUser}>Create</button>
            {
                loading ? (
                    <>
                        <p>Loading...</p>
                    </>
                ) : (
                    userData ? (
                        <ul>
                            {userData.map(user => (
                                <li key={user.id}>
                                    {editUser && editUser.id === user.id ? (
                                        <div>
                                            <input
                                                type="text"
                                                value={editUser.name}
                                                onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                                            />
                                            <button onClick={() => handleSaveEdit()}>Save</button>
                                        </div>
                                    ) : (
                                        <>
                                            {user.name}
                                            <button onClick={() => handleEditUser(user)}>Edit</button>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No data</p>
                    )
                )
            }
        </div>
    );
}

export default GetDataAxios;
