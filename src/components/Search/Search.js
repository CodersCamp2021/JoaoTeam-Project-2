import React from "react"
import { useState, useEffect } from "react"
import { assembleProfiles } from "./Helpers"

export default function SearchWindow() {
    const [location, setLocation] = useState("");
    const [language, setLanguage] = useState("");
    const [ids, setIds] = useState([]);

    handleSubmit = async (event) => {
        event.preventDefault()

        console.log(location);
        console.log(language);
        assembleProfiles(location, language);

    };

    return (
        <div className="right-main">
            <form onSubmit={handleSubmit}>
                <label htmlFor="location">
                    <h5 className="inline-text">Best coders who live...</h5>
                    <input
                        id="location"
                        value={location}
                        placeholder="anywhere in Poland"
                        onChange={(e) => setLocation(e.target.value)}
                        className="input-area" />
                </label>
                <label htmlFor="language">
                    <h5 className="inline-text">and writes in...</h5>
                    <select
                        id="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        onBlur={(e) => setLanguage(e.target.value)}
                    >
                        <option value="">any language</option>
                        <option value="C">C</option>
                        <option value="C++">C++</option>
                        <option value="C#">C#</option>
                        <option value="Java">Java</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Kotlin">Kotlin</option>
                        <option value="PHP">PHP</option>
                        <option value="Python">Python</option>
                        <option value="Ruby">Ruby</option>
                        <option value="Swift">Swift</option>
                    </select>
                </label>
                <input type="image" className="submitBtn">
                </input>
            </form>
        </div >
    )
}

export default SearchWindow;
