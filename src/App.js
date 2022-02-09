import { render } from "react-dom";
// import TestComponent from "./components/TestComponent/TestComponent"
import MainPage from "./components/MainPage/MainPage";
import Results from "./components/ResultsPage/Results";
import PageNotFound from "./components/Errors/PageNotFound";
import User from "./components/User/User";
import Ranking from "./components/Ranking/Ranking";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<Router>
            <Routes>
                <Route path="/" element={< MainPage />} />
                <Route path="/results" element={<Results />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router >
	);
};

render(<App />, document.getElementById("root"));
