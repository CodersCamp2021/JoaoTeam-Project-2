import React from "react"
import SearchWindow from "../Search/Search"
import RankingWindow from "../Ranking/RankingWindow"
import { Link } from "react-router-dom"


const MainPage = () => {
    return (
        <div className="main-page-background">
            <div className="main-page-container">
                <Link to="/" className="logo-link">
                    <img className="logo" />
                </Link>
                <div className="right-main">
                    <h3 className="intro">Hey Buddy! Who are you <br />
                        <span className="looking">looking</span> for?</h3>
                    <SearchWindow />
                </div>
                <RankingWindow />
            </div>
        </div>
    )
}

export default MainPage
