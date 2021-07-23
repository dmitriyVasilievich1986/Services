import { Link } from "react-router-dom";
import React from 'react'

function Navbar() {
    return (
        <div className="navbar">
            <div className="col1"></div>
            <div className="col2 row margin-center">
                <Link className="link" to="/">Главная</Link>
            </div>
            <div className="col1"></div>
        </div >
    )
}

export default Navbar
