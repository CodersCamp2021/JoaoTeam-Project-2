import React from "react"
import { useNavigate } from "react-router-dom"

export default function RankingWindow() {

    let navigate = useNavigate();

    async function handleClick(event) {
        navigate({
            pathname: "ranking",
        });
    }

    return (
        <div className="left-main">
            <div>
                <h5 className="inline-text">...or just show me...</h5>
                <input type="image" className="popular-btn" onClick={handleClick}>
                </input>
            </div>
        </div >
    )
}
