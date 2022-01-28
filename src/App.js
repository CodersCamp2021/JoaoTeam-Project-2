import { render } from "react-dom";
import MainPage from "./components/MainPage/MainPage";
import Results from "./components/ResultsPage/Results";

import TestComponent from "./components/TestComponent/TestComponent";

const App = () => {
	return (
		<>
			{/* <TestComponent /> */}
			{<Results />}
		</>
	);
};

render(<App />, document.getElementById("root"));
