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
        <div>
            <div>
                <h5>Peepee poopoo</h5>
                <input type="image" className="popularBtn" onClick={handleClick}>
                </input>
            </div>
        </div >
    )
}
