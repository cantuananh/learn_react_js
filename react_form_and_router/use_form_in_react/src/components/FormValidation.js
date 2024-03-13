import React, {useState} from "react";

function FormValidation() {
    const [value, setValue] = useState();
    const [status, setStatus] = useState(false);

    const handleOnchange = (event) => {
        setValue(event.target.value);
        console.log(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!Number(parseInt(value))) {
            alert("Value is not number! Try another value!")
            setValue("")
            setStatus(false)
        } else {
            setStatus(true);
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" onChange={handleOnchange}/>
                <button type={"submit"} >Submit</button>
            </form>

            <div>
                {(status) ?
                    (
                        <div>
                            <h1>Number is: {value}</h1>
                        </div>
                    ) :
                    (
                        ""
                    )
                }
            </div>
        </div>
    );


}

export default FormValidation;