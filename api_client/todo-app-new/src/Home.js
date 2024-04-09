import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
        <>
            <div style={{textAlign: "center"}}>
                <h1>Welcome to HomePage.</h1>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={"/list-todo"}>List to do</Link>
                            </li>
                            <li>
                                <Link to={"/list-book"}>List book</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );

}

export default Home;