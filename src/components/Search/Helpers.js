const API_URL = "https://api.github.com/search/users?q=";

async function searchUsers(location, language, per_page = 20) {
    let URL = API_URL + `location:${location}&per_page=${per_page}`
    if (language != "") {
        URL = API_URL + `location:${location} language:${language}&per_page=${per_page}`
    }

    const res = await fetch(URL);
    const json = await res.json();
    const users = json.items.map(({ login, avatar_url }) => ({ login, avatar_url }));

    return users;
}

// Wyszukuje najcześciej pojawiający się element w tablicy
//znajdywanie głównego języka na podstawie repo danego usera

function mode(arr) {
    return arr.sort((a, b) =>
        arr.filter(v => v === a).length
        - arr.filter(v => v === b).length
    ).pop();
}

// Zwraca listę user id ze skojarzonymi językami 
// async function requestLanguages(profiles) {
//     const users = profiles.items.map(({ id, login, repos_url }) => ({ id, login, repos_url }));
//     users.items.forEach(async function (user) {
//         const res = await fetch(user.repos_url);
//         const repos = await res.json();
//         const languages = repos.items.map(language => language);
//         user.language = mode(languages);
//     });
//     return users;
// }

//Wykonuje request do API

// async function assembleProfiles(location, language, per_page = 20) {
//     let page = 0;
//     let results = [];

//     while (results.length < per_page) {
//         page = page + 1;
//         let res = await fetch(API_URL +
//             `?q=location:${location}&per_page=${per_page}&page=${page}&sort=bestmatch&order=desc`);
//         let json = await res.json();
//         let page_results = requestLanguages(json);

//         results = results.concat(page_results.items.map(function (user) {
//             if (user.language == language) {
//                 return user;
//             }
//         }));
//     }
//     console.log(results.items);
//     return results;
// }

export { searchUsers };
