import React from "react";
import { useNavigate } from "react-router-dom"

const PageNotFound = () => {

    let navigate = useNavigate();

    return (
        <div className="page-not-found">
            <h1>404 Error</h1>
            <img className="error404pic" alt="Page Not Found" />
            <button className="error404btn" onClick={() => { navigate("/") }}> Back to Main Page </button>
        </div>
    )
}

export default PageNotFound;
