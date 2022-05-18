import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-brand mb-4">
            <Link to="/recipes">
                <div className='logo'>EatLiveEnjoy</div>
            </Link>
            <Link to="/about">
                <div className='about'> About </div>
            </Link>
        </nav>
    )
}

export default Header