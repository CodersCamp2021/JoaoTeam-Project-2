import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Toggle from "./Toggle";

const Results = () => {
	const [users, setUsers] = useState([]);
	const [toggled, setToggled] = useState(false);
	const [order, setOrder] = useState("repositories");

	const [searchParams, setSearchParams] = useSearchParams({});


	useEffect(() => {
		const fetchData = async () => {
			//TODO: dodać przeglądanie dalszych stron wyników
			let URL = `https://api.github.com/search/users?q=location:${searchParams.get('location')}&per_page=20&sort=${order}`
			if (searchParams.get('language') != "") {
				URL = `https://api.github.com/search/users?q=location:${searchParams.get('location')} language:${searchParams.get('language')}&per_page=20&sort=${order}`
			}
			const data = await fetch(URL);
			const json = await data.json();
			const items = json.items;

			setUsers(items);
		};
		fetchData().catch(console.error);
	}, [order]);

	// Switch działa, ale po kilku zmianach sortowania wyrzuca error przez API rate limit
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
						{searchParams.get('location')}, {searchParams.get('language')}
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
