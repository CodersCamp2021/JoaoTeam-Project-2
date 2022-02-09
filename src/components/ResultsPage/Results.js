import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Toggle from "./Toggle";
import { Link } from "react-router-dom";

const Results = () => {
	const [users, setUsers] = useState([]);
	const [toggled, setToggled] = useState(false);
	const [order, setOrder] = useState("repositories");

	const [currentPage, setCurrentPage] = useState(1);

	const [pages, setPages] = useState([]);

	function handleClick(event) {
		setCurrentPage(Number(event.target.id));
		window.scrollTo(0,0)
	}

	const [searchParams, setSearchParams] = useSearchParams({});
	
	useEffect(() => {
		const languageParam = searchParams.get("language") != "" ? `language: ${searchParams.get("language")}` : ''
		const locationParam = searchParams.get("location") != "" ? `location: ${searchParams.get("location")}` : 'location: Poland'
		console.log(`https://api.github.com/search/users?per_page=20&page=${currentPage}&q=`+`${locationParam} ${languageParam}`.trim()+`&sort=${order}`)
		fetch(`https://api.github.com/search/users?per_page=20&page=${currentPage}&q=${locationParam} ${languageParam}&sort=${order}`,{
			method: 'GET',
			redirect: 'follow',
		})
		.then(response => response.json())
		.then(result => {
			setUsers(result.items)
			setPages(result.total_count >= 100 ? [1,2,3,4,5] : pagesFromCount(Math.floor((result.total_count - 1) / 20) + 1))
			console.log(Math.floor(result.total_count / 20))
		})
		.catch(error => console.error(error))
	}, [order, currentPage])

	const handleOrder = () => {
		if (order === "repositories") {
			setOrder("followers");
		} else if (order === "followers") {
			setOrder("repositories");
		}
	};

	const pagesFromCount = (count) => {
		let pages = []
		for(let i = 0; i < count; i++) {
			pages[i] = i+1;
		}
		return pages
	}

	return (
		<>
			<div className="results-container">
				<Link to="/">
					<img className="logo" />
				</Link>
				<div className="details-container">
					<div className="details"></div>
					<div className="details-city-language">
						{searchParams.get("location") != "" ? searchParams.get("location") : "Poland"}, {searchParams.get("language") != "" ? searchParams.get("language") : "any language"}
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
					{users.map((user) => {
						return (
							<Link to={`/user/${user.login}`} className="link-style" key={user.login}>
								<div className="user-container">
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
