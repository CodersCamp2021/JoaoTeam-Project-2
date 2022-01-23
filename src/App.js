import { render } from "react-dom"

import SearchWindow from "./components/Search/Search"

const App = () => {
    return (
        <div>

            <SearchWindow />
        </div>
    )
}

render(<App />, document.getElementById("root"))
