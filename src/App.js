import { render } from "react-dom"

import SearchWindow from "./components/Search/Search"

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <SearchWindow />
        </div>
    )
}

render(<App />, document.getElementById("root"))
