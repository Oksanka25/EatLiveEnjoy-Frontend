import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="nav">
            <Link to="/recipes">
                <div>EatLiveEnjoy</div>
            </Link>
            <Link to="/about">
                <div> About </div>
            </Link>
        </nav>
    )
}

export default Header