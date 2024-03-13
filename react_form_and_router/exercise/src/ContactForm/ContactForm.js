import React, {useState} from "react";

function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9+.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        return regex.test(email)

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let newErrors = {...errors};

        if (!formData.name.trim()) {
            newErrors.name = "Required";
        } else {
            newErrors.name = "";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Required";
        } else {
            newErrors.phone = "";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Invalid email address";
        } else {
            newErrors.email = "";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Required";
        } else {
            newErrors.message = "";
        }

        setErrors(newErrors);

        if (!Object.values(newErrors).some(error => error !== "")) {
            alert("Add contact successfully!!!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            });
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <>
            <div>
                <h1>Contact form</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id={"name"} name={"name"} value={formData.name} onChange={handleChange}/>
                        <span style={{color: "red"}}>{errors.name && <span>{errors.name}</span>}</span>

                        <br/>
                        <br/>
                        <label htmlFor="email">Email</label>
                        <input type="text" id={"email"} value={formData.email} name={"email"} onChange={handleChange}/>
                        <span style={{color: "red"}}>{errors.email && <span>{errors.email}</span>}</span>

                        <br/>
                        <br/>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id={"phone"} value={formData.phone} name={"phone"} onChange={handleChange}/>
                        <span style={{color: "red"}}>{errors.phone && <span>{errors.phone}</span>}</span>

                        <br/>
                        <br/>
                        <label htmlFor="message">Message</label>
                        <textarea rows={5} value={formData.message} id={"message"} name={"message"}
                                  onChange={handleChange}/>
                        <span style={{color: "red"}}>{errors.message && <span>{errors.message}</span>}</span>
                        <br/>
                        <br/>
                        <button type={"submit"}>Send</button>

                    </div>
                </form>
            </div>
        </>
    );

}

export default ContactForm;