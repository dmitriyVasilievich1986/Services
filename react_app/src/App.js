import loadable from '@loadable/component'
import ReactDOM from 'react-dom'
import Navbar from './pages/navbar/Navbar'
import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {

    React.useEffect(_ => {
        document.title = process.env.REACT_APP_PROJECT_NAME || "Document"
    }, [])

    return (
        <div>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
