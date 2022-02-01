import { render } from "react-dom"

import TestComponent from "./components/TestComponent/TestComponent"
import User from "./components/User/User"

const App = () => {
    return (
        // <TestComponent />
        <User />
    )
}

render(<App />, document.getElementById("root"))
