import React from "react"
import { useState } from "react"

export default function SearchWindow() {
    const [location, updateLocation] = useState("");
    const [language, updateLanguage] = useState("");

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Best coders who live...
                    <input
                        id="location"
                        value={location}
                        placeholder="anywhere in Poland"
                        onChange={(e) => updateLocation(e.target.value)} />
                </label>
                <label htmlFor="language">
                    and writes in...
                    <input
                        id="language"
                        value={language}
                        placeholder="any language"
                        onChange={(e) => updateLanguage(e.target.value)} />
                </label>
                <input type="submit" value="Find coders" />
            </form>
        </div>
    )
}