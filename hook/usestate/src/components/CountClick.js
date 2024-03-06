import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function CountClick() {
    const [click, setClick] = useState(0);

    const handCountClickWhenClickButton = () => {
        setClick(click + 1);
    }

    return (
        <div>
            <h1>Number click: {click}</h1>
            <button className={"btn btn-warning"} onClick={handCountClickWhenClickButton}>Click me</button>
        </div>
    );
}

export default CountClick;