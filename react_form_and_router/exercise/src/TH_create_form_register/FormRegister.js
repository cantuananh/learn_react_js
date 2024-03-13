import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormRegister = () => {
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        city: ""
    });

    const [validations, setValidations] = useState({
        firstName: false,
        lastName: false,
        email: false,
        city: false
    });

    const onChangeFirstName = (e) => {
        const { value } = e.target;
        setForm({...form, firstName: value});
        setValidations({...validations, firstName: value.trim() !== ""});
        setValidated(false);
    }

    const onChangeLastName = (e) => {
        const { value } = e.target;
        setForm({...form, lastName: value});
        setValidations({...validations, lastName: value.trim() !== ""});
        setValidated(false);
    }

    const onChangeEmail = (e) => {
        const { value } = e.target;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const isValidEmail = emailRegex.test(value);
        setForm({...form, email: value});
        if (value.trim() === "") {
            setValidations({...validations, email: false});
        } else {
            setValidations({...validations, email: isValidEmail});
        }
        setValidated(false);
    }


    const onChangeCity = (e) => {
        const { value } = e.target;
        setForm({...form, city: value});
        setValidations({...validations, city: value.trim() !== ""});
        setValidated(false);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const formElement = event.currentTarget;
        if (!formElement.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);
        const isFormValid = Object.values(validations).every(value => value);
        if (isFormValid) {
            // Xử lý dữ liệu khi form hợp lệ
            alert("Form submitted successfully!");
        } else {
            alert("Please fill in all required fields correctly.");
        }
    };

    return (
        <div>
            <h1>Form register</h1>
            <Form validated={validated} noValidate onSubmit={handleSubmit} style={{margin: "0 auto"}}>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        onChange={onChangeFirstName}
                        required
                        type="text"
                        name={"firstName"}
                        placeholder="First name..."
                        isInvalid={validated && !validations.firstName}
                        isValid={validations.firstName}
                    />
                    <Form.Control.Feedback type="invalid">Please enter your first name.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        onChange={onChangeLastName}
                        required
                        type="text"
                        name={"lastName"}
                        placeholder="Last name..."
                        isInvalid={validated && !validations.lastName}
                        isValid={validations.lastName}
                    />
                    <Form.Control.Feedback type="invalid">Please enter your last name.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="text"
                            onChange={onChangeEmail}
                            placeholder="Email..."
                            name={"email"}
                            aria-describedby="inputGroupPrepend"
                            required
                            isInvalid={validated && !validations.email}
                            isValid={validations.email}
                        />
                        <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="City"
                        name={"city"}
                        onChange={onChangeCity}
                        isInvalid={validated && !validations.city}
                        isValid={validations.city}
                        required
                    />
                    <Form.Control.Feedback type="invalid">Please enter your city.</Form.Control.Feedback>
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>
        </div>
    );
}

export default FormRegister;
