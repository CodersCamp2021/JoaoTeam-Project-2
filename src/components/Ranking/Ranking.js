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
	const [error, setError] = useState(false);

	useEffect(() => {
		fetch(
			`https://api.github.com/search/users?q=location:$poland&per_page=30&sort=${order}`,
			{ method: "GET", redirect: "follow" }
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Too many calls.");
				}
				return response.json();
			})
			.then((result) => {
				setError(false);
				setUsers(result.items);
			})
			.catch((error) => {
				console.error(error);
				setError(true);
			});
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
				{error ? (
					<>
						<h1>Error</h1>
						<h2>Too many API calls. Try again in a while.</h2>
					</>
				) : (
					<>
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
					</>
				)}
			</div>
		</div>
	);
}

export default Ranking;
