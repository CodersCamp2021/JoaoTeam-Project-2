import React from "react"
import SearchWindow from "../Search/Search"

const MainPage = () => {
    return (
        <div className="main-page-container">
            <Link to="/">
                <img className="logo" />
            </Link>
            <h3 className="intro">Hey Buddy! Who are you <br />
                <span className="looking">looking</span> for?</h3>
            <SearchWindow className="right-main" />

        </div>
    )
}

export default MainPage
