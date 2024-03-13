import React, {useState} from "react";
import {Formik} from "formik";

function FormLogin() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    const [form, setForm]  =useState({});


    const handleSubmit = () => {

    }

    const handleValidate = () => {

    }

    return (
        <>
            <div>
                <h1>Login form</h1>
                <Formik initialValues={"form"} onSubmit={handleSubmit} validate={handleValidate}>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="email" name={"email"} placeholder={"Username..."} />
                        <input type="text" name={"password"} placeholder={"password..."} />
                    </form>
                </Formik>
            </div>
        </>
    );
}

export default FormLogin;