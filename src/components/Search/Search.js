import React from "react"
import { useState } from "react"

export default function SearchWindow() {
    const [location, updateLocation] = useState("");
    const [language, updateLanguage] = useState("");

    return (
        <div className="search-window">
            <form>
                <label htmlFor="location">
                    <h5 className="inline-text">Best coders who live...</h5>
                    <input
                        id="location"
                        value={location}
                        placeholder="anywhere in Poland"
                        onChange={(e) => updateLocation(e.target.value)}
                        className="input-area" />
                </label>
                <label htmlFor="language">
                    <h5 className="inline-text">and writes in...</h5>
                    <input
                        id="language"
                        value={language}
                        placeholder="any language"
                        onChange={(e) => updateLanguage(e.target.value)}
                        className="input-area" />
                </label>
                <input type="image" className="submitBtn">
                </input>
            </form>
        </div>
    )
}

