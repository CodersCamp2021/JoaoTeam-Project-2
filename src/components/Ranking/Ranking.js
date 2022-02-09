import { useEffect, useState } from "react";
import Toggle from "../ResultsPage/Toggle.js";
import { useNavigate, Link } from "react-router-dom";

function Ranking() {
	let navigate = useNavigate();

	async function handleClick(event) {
		navigate({
			pathname: "/",
		});
	}

	const [users, setUsers] = useState([]);
	const [toggled, setToggled] = useState(false);
	const [order, setOrder] = useState("repositories");

	useEffect(() => {
		async function requestData() {
			const res = await fetch(
				`https://api.github.com/search/users?q=location:$poland&per_page=30&sort=${order}`
			);
			const json = await res.json();
			const items = json.items;

			setUsers(items);
		}
		requestData().catch(console.error);
	}, [order]);

	const handleOrder = () => {
		if (order === "repositories") {
			setOrder("followers");
		} else if (order === "followers") {
			setOrder("repositories");
		}
	};

	return (
		<div>
			<div className="results-container">
				<Link to="/">
					<img className="logo" />
				</Link>
				<div className="details-container">
					<div className="details ranking"></div>
					<div className="details-city-language">Top 30 in Poland</div>
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
				<div className="users-container-ranking">
					{users.map((user, index) => {
						return (
							<Link to={`/user/${user.login}`} className="link-style">
								<div className="user-container" key={user.login}>
									<h2>#{index + 1}</h2>
									<img
										className="user-img"
										src={user.avatar_url}
										alt={user.login}
									/>
									<h2>{user.login}</h2>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Ranking;
