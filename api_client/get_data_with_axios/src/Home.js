import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>List router</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/users"}>List users</Link>
                    </li>

                    <li>
                        <Link to={"/articles"}>List articles</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );

}

export default Home;