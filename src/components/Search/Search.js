import React from "react"
import { useState, useEffect } from "react"

export default function SearchWindow() {
    const [location, updateLocation] = useState("");
    const [language, updateLanguage] = useState("");

    useEffect(() => {
        requestProfile();
    }, []);

    async function requestProfile() {
        const res = await fetch(
            `https://api.github.com/search/users?q=location=${location}&language=${language}&per_page=20&page=1&sort=best match&order=desc`
        );
        const json = await res.json();

        setProfile(json.profile);
    }

    return (
        <div className="right-main">
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

export default SearchWindow;
