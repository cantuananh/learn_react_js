import React, {useState} from "react";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import "./style.css";


const FormLogin = () => {
    const [logined, setLogined] = useState(false);
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    })
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");


    const handleChangeUsername = (e) => {
        const { value } = e.target;
        setUser({...user, username: value})
        validateUsername(value);

    }

    function validateUsername(value) {
        const regexUsername = /^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$/.test(value);

        setErrors({...errors, username: regexUsername ? "" : "Invalid email format"})
    }

    const handleChangePassword = (e) => {
        const { value } = e.target;
        setUser({...user, password: value})
        validatePassword(value);
    }

    function validatePassword(value) {
        const regexPassword = /^[a-zA-Z0-9!@#$%^&+=._-]{6,}$/.test(value);

        setErrors({...errors, password: regexPassword ? "" : "Invalid password format"})

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.username !== "" && user.password !== "") {
            alert("Dang nhap thanh cong!" + JSON.stringify(user, null, 2))
        } else {
            alert("Dang nhap that bai");
        }
    }

    const isUsernameValid = user.username.trim() !== "";
    const isPasswordValid = user.password.trim() !== "";

    return (
        <>
            <h1>Form login</h1>
            <MDBContainer fluid className="p-3 my-5">

                <MDBRow>

                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
                    </MDBCol>

                    <MDBCol col='4' md='6'>

                        <form onSubmit={handleSubmit}>
                            <MDBInput wrapperClass='mb-4' onChange={handleChangeUsername} name={"username"} label='Username' id='formControlLg' type='text' error={errors.username} size="lg" />
                            <MDBInput wrapperClass='mb-4' onChange={handleChangePassword} label='Password' name={"password"} id='formControlLg' type='password' error={errors.password} size="lg"/>


                            <div className="d-flex justify-content-between mx-4 mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <a href="!#">Forgot password?</a>
                            </div>

                            <MDBBtn className="mb-4 w-100" size="lg">Sign in</MDBBtn>
                        </form>

                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0">OR</p>
                        </div>

                        <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
                            <MDBIcon fab icon="facebook-f" className="mx-2"/>
                            Continue with facebook
                        </MDBBtn>

                        <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
                            <MDBIcon fab icon="twitter" className="mx-2"/>
                            Continue with twitter
                        </MDBBtn>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </>
    );
}

export default FormLogin;