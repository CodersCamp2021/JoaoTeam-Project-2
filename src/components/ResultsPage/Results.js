import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Toggle from "./Toggle";
import { useNavigate } from "react-router-dom";

const Results = () => {
	const [users, setUsers] = useState([]);
	const [toggled, setToggled] = useState(false);
	const [order, setOrder] = useState("repositories");

	const [currentPage, setcurrentPage] = useState(1);
	const [itemsPerPage, setitemsPerPage] = useState(12);

	const pages = [];
	for (let i = 1; i <= Math.ceil(users.length / itemsPerPage); i++) {
		pages.push(i);
	}

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

	function handleClick(event) {
		setcurrentPage(Number(event.target.id));
	}

	let navigate = useNavigate();

	async function backToHomePage(event) {
		event.preventDefault();
		navigate({
			pathname: "/",
		});
	}

	const [searchParams, setSearchParams] = useSearchParams({});
	let conditional = "Poland, any language"
	let URL = `https://api.github.com/search/users?q=location:Poland`;

	if (searchParams.get("location") != "") {
		URL = `https://api.github.com/search/users?q=location:${searchParams.get("location")}`;
	}
	if (searchParams.get("language") != "") {
		URL = URL + ` language:${searchParams.get("language")}`;
	}
	if ((searchParams.get("location") != "") && (searchParams.get("language") != "")) {
		conditional = ", ";
	}
	if ((searchParams.get("location") == "") && (searchParams.get("language") != "")) {
		conditional = "Poland, ";
	}
	if ((searchParams.get("location") != "") && (searchParams.get("language") == "")) {
		conditional = ", any language";
	}

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch(URL + `&sort=${order}`);
			const json = await data.json();
			const items = json.items;

			setUsers(items);
		};
		fetchData().catch(console.error);
	}, [order]);

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
				<img className="logo" onClick={backToHomePage} />
				<div className="details-container">
					<div className="details"></div>
					<div className="details-city-language">
						{searchParams.get("location")}{conditional}{searchParams.get("language")}
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
					</div>
				</div>
				<div className="users-container">
					{currentItems.map((user) => {
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
				<div className="pageNumbers">
					<ul>
						{pages.map((number) => {
							return (
								<li
									key={number}
									id={number}
									onClick={handleClick}
									className={currentPage == number ? "active" : null}
								>
									{number}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Results;
