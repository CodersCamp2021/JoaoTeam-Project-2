import { render } from "react-dom"
import TestComponent from "./components/TestComponent/TestComponent"
//import MainPage from "./components/MainPage/MainPage"

const App = () => {
    return (
        <div>
            <TestComponent />
        </div>
    )
}

render(<App />, document.getElementById("root"))
