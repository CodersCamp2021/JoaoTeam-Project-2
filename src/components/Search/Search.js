import React from "react"
import { useState } from "react"

export default function SearchWindow() {
    const [location, updateLocation] = useState("");
    const [language, updateLanguage] = useState("");
    const [ids, setIds] = useState([]);

    function mode(arr) {
        return arr.sort((a, b) =>
            arr.filter(v => v === a).length
            - arr.filter(v => v === b).length
        ).pop();
    }

    async function requestLanguages(profiles) {
        const langs = profiles.map(async function (profile) {
            let res = await fetch(profile.repos_url);
            let repos = await res.json();
            let languages = repos.map(function (x) { return x.language });
            let language = mode(languages);
            return { id: profile.id, language: language };
        });
        return langs;
    }
    async function assembleProfiles(location, language, per_page = 20) {
        let page = 0;
        let results = [];

        while (results.length < per_page) {
            page = page + 1;
            let res = await fetch(
                `https://api.github.com/search/users?q=location:${location}&per_page=${per_page}&page=${page}&sort=bestmatch&order=desc`
            );
            let json = await res.json();
            let page_results = requestLanguages(json);

            results = results.concat(page_results.map(function (y) {
                if (y.language == language) {
                    return y.id;
                }
            }));
        }

        setIds(results);
        console.log(ids);
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
                <input type="image" className="submitBtn" onClick={assembleProfiles}>
                </input>
            </form>
        </div>
    )
}

export default SearchWindow;
