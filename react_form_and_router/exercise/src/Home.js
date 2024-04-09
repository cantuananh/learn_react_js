import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>List exercises</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/FormRegister">FormRegister</Link>
                    </li>
                    <li>
                        <Link to="/FormLogin">FormLogin</Link>
                    </li>
                    <li>
                        <Link to="/FormLoginFormik">FormLoginFormik</Link>
                    </li>
                    <li>
                        <Link to="/useNavigate">useNavigate</Link>
                    </li>
                    <li>
                        <Link to="/category">category</Link>
                    </li>
                    <li>
                        <Link to="/contact_form">Contact form</Link>
                    </li>
                    <li>
                        <Link to={"/book_management"}>Book management</Link>
                    </li>

                    <li>
                        <Link to={"/exercise_rloute1"}>Exercise route 1</Link>
                    </li>

                    <li>
                        <Link to={"/login"}>Login</Link>
                    </li>
                </ul>
            </nav>
        </>
    );

}

export default Home;