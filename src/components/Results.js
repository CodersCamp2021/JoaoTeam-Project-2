import { useEffect, useState } from "react";

const Results = () => {
	const [users, setUsers] = useState([]);

	// Draft
	const city = "Kraków";
	const language = "Javascript";
	const sort = "best match";

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch(
				`https://api.github.com/search/users?q=location:${city} language:${language}&per_page=20&sort=${sort}`
			);
			const json = await data.json();
			const items = json.items;

			setUsers(items);
		};

		fetchData().catch(console.error);
	}, []);

	return (
		<>
			<div className="results-container">
				<img className="logo" />
				<div className="details-container">
					<img className="details" />
					<div className="details-city-language">
						{city}, {language}
					</div>
				</div>
				<div>
					<div>
						order by: score{" "}
						<span
							onClick={(e) => console.log("click")}
							className="switch-btn"
						></span>{" "}
						followers
					</div>
				</div>
				<div className="users-container">
					{users.map((user) => {
						return (
							<div className="user-container">
								<img
									className="user-img"
									src={user.avatar_url}
									alt={user.login}
								/>
								<h2>{user.login}</h2>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Results;
