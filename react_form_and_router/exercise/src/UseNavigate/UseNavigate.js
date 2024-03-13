import React from "react";
import {useNavigate} from "react-router-dom";

function UseNavigate() {
    let navigate = useNavigate();
    const sendDataToProduct = event => {
        navigate(`/product/${event.target.value}`);
    }

    return (
        <>
            <h2>Select a Category:</h2>
            <select defaultValue="default" onChange={e => sendDataToProduct(e)}>
                <option value="default" disabled hidden>
                    Choose your car
                </option>
                <option value="Honda">Honda</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Yamaha">Yamaha</option>
            </select>
        </>
    );

}

export default UseNavigate;