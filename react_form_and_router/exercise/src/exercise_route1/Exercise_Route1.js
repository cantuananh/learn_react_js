import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function Exercise_Route1() {
    let navigate = useNavigate();
    const [message, setMessage] = useState();

    function handleChangeMessage(e) {
        setMessage(e.target.value);
    }

    const handleSendData = event => {
        event.preventDefault();
        navigate("/exercise_route1/page", {state: {message: message}});
    }

    return (
        <>
            <form onSubmit={handleSendData}>
                <input type="text" onChange={handleChangeMessage} placeholder={"Enter message..."}/>
                <br/>
                <button type={"submit"}>Send</button>
            </form>
        </>
    );
}

export default Exercise_Route1;