import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function Home() {
    return (
        <>
            <div style={{textAlign: "center"}}>
                <h1>Welcome to HomePage.</h1>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={"/list"}>List to do app</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );

}

export default Home;