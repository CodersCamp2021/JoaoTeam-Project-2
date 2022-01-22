import { render } from "react-dom"

import TestComponent from "./components/TestComponent/TestComponent"

const App = () => {
    return (
        <TestComponent />
    )
}

render(<App />, document.getElementById("root"))
