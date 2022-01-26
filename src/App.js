import { render } from "react-dom"
import MainPage from "./components/MainPage/MainPage"

const App = () => {
    return (
        <div>
            <MainPage />
        </div>
    )
}

render(<App />, document.getElementById("root"))
