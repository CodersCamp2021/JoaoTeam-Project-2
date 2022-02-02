import { render } from "react-dom"
// import TestComponent from "./components/TestComponent/TestComponent"
import MainPage from "./components/MainPage/MainPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {
    return (
        <Router>
            <div>
                <Route path="/" component={MainPage} />
            </div>
        </Router>
    )
}

render(<App />, document.getElementById("root"))
