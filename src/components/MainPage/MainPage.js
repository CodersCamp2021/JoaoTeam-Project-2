import React from "react"
import SearchWindow from "../Search/Search"
import { Link } from "react-router-dom"

const MainPage = () => {
    return (
        <div className="main-page-container">
            <Link to="/" className="logo-link">
                <img className="logo" />
            </Link>
            <h3 className="intro">Hey Buddy! Who are you <br />
                <span className="looking">looking</span> for?</h3>
            <SearchWindow className="right-main" />

        </div>
    )
}

export default MainPage
