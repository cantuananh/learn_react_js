import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCheckbox,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow
} from "mdb-react-ui-kit";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    function handleLogin(e) {
        if (email === "admin@admin.com" && password === "123456") {
            navigate("/employee")
        } else {
            alert("Dang nhap khong thanh cong!")
        }
    }



    return (
        <>
            <MDBContainer fluid>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                                <p className="text-white-50 mb-3">Please enter your login and password!</p>

                                <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
                                <MDBInput value={password} onChange={e => setPassword(e.target.value)} wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                                <MDBBtn size='lg' onClick={handleLogin}>
                                    Login
                                </MDBBtn>

                                <hr className="my-4" />

                                <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
                                    <MDBIcon fab icon="google" className="mx-2"/>
                                    Sign in with google
                                </MDBBtn>

                                <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
                                    <MDBIcon fab icon="facebook-f" className="mx-2"/>
                                    Sign in with facebook
                                </MDBBtn>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </>
    );

}

export default Login;