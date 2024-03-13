import React from "react";
import {useLocation} from "react-router-dom";

function Page() {
    const {state} = useLocation();


    return (
        <>
            <div>
                <h1>Data receive: {state.message}</h1>
            </div>
        </>
    );

}

export default Page;