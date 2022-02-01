import { useEffect, useState } from "react";
import Toggle from "./Toggle";

const Results = () => {
	const [users, setUsers] = useState([]);
	const [toggled, setToggled] = useState(false);
	const [order, setOrder] = useState("repositories");

	// Draft
	const location = "Kraków";
	const language = "Java";

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch(
				`https://api.github.com/search/users?q=location:${location} language:${language}&per_page=20&sort=${order}`
			);
			const json = await data.json();
			const items = json.items;

			setUsers(items);
		};
		fetchData().catch(console.error);
	}, [order]);

	// Switch działa, ale po kilku zmianach sortowania wyrzuca error
	const handleOrder = () => {
		if (order === "repositories") {
			setOrder("followers");
		} else if (order === "followers") {
			setOrder("repositories");
		}
	};

	return (
		<>
			<div className="results-container">
				<img className="logo" />
				<div className="details-container">
					<div className="details"></div>
					<div className="details-city-language">
						{location}, {language}
					</div>
				</div>
				<div>
					<div className="switch-container">
						<div>Order by: Repositories</div>
						<Toggle
							onChange={(event) => setToggled(event.target.checked)}
							onChange={handleOrder}
						/>
						<div>Followers</div>
						{console.log(order)}
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
									key={user.login}
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
