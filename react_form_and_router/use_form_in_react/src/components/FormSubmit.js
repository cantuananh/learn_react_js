import React, {useState} from "react";

function FormSubmit() {
    const [state, setState] = useState({
        username: "",
        age: null
    });

    const [username, setUsername] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        if ((event.target.username.value === "admin") && (event.target.age.value === "20")) {
            setUsername(state.username);
        } else {
            setUsername("")
            alert("Username or password wrong!")
        }
    };

    const handleChange = (event) => {
        setState({...state, [event.target.name]: [event.target.value]})

    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                Enter the name: <input type="text" name={"username"} onChange={handleChange}/>
                Enter age: <input type="text" name={"age"} onChange={handleChange}/>
                <button type={"submit"}>Submit form</button>
            </form>
            {(username !== "")
                ? (
                    <div>
                        <h1>Hello {username}</h1>
                    </div>
                ) : ""
            }
        </div>
    );

}

export default FormSubmit;