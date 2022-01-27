import { useEffect, useState } from "react";

const Results = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch(
				`https://api.github.com/search/users?q=location:kraków&per_page=20`
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
