import { render } from "react-dom";
// import TestComponent from "./components/TestComponent/TestComponent"
import MainPage from "./components/MainPage/MainPage";
import Results from "./components/ResultsPage/Results";
import PageNotFound from "./components/Errors/PageNotFound";
import User from "./components/User/User";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ranking from "./components/Ranking";

const App = () => {
	return (
		<Ranking />
		/*<Router>
            <Routes>
                <Route path="/" element={< MainPage />} />
                <Route path="/results" element={<Results />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router >*/
	);
};

render(<App />, document.getElementById("root"));
