import React from "react"
import SearchWindow from "../Search/Search"
import RankingWindow from "../Ranking/RankingWindow"

const MainPage = () => {
    return (
        <div className="main-page-container">
            <img className="logo" />
            <h3 className="intro">Hey Buddy! Who are you <br />
                <span className="looking">looking</span> for?</h3>
            <SearchWindow />
            <RankingWindow />
        </div>
    )
}

export default MainPage
