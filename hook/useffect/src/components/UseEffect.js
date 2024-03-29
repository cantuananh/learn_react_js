import React, {useEffect, useState} from "react";

function UseEffect() {
    const [selected, setSelected] = useState("0");
    const [valueSelected, setValueSelected] = useState("");

    const choice = (e) => {
        setSelected(e.target.value);
    }

    useEffect(() => {
        switch (selected) {
            case "0":
                setValueSelected("Java")
                break;

            case "1":
                setValueSelected("Angular")
                break;

            case "2":
                setValueSelected("Javascript")
                break;

            case "3":
                setValueSelected("PHP")
                break;
        }
    })

    return (
        <div>
            Course:
            <select name="" id="" onChange={e => (choice(e))}>
                <option value="0">Java</option>
                <option value="1">Angular</option>
                <option value="2">Javascript</option>
                <option value="3">Php</option>
            </select>

            <h1>Course selected: {valueSelected}</h1>
        </div>
    );

}

export default UseEffect;