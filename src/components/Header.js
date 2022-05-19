import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
      <nav className="navbar navbar-brand mb-4 me-0">
        <div>
          <Link to="/recipes">
            <div className="logo">EatLiveEnjoy</div>
          </Link>
        </div>

        <div className='d-flex gap-4'>
          <Link to="/new-recipe">
            <div className="about"> Create new </div>
          </Link>
          <Link to="/about">
            <div className="about"> About </div>
          </Link>
        </div>
      </nav>
    );
}

export default Header