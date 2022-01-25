import { render } from "react-dom";
import Results from "./components/Results";

import TestComponent from "./components/TestComponent/TestComponent";

const App = () => {
	return (
		<>
			{/* <TestComponent /> */}
			<Results />
		</>
	);
};

render(<App />, document.getElementById("root"));
