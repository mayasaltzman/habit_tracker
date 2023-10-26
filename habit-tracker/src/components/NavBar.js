import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false) //track if hamburger menu is selected
    return (
        <nav>
            <Link to="/" className="title">Home</Link>
            {/* reverse value of hamburger menu so it opens/closes with arrow functions */}
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                {/* spans are lines of hamburger menu */}
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <lil>
                    <Link to="/overview" id="a">Overview</Link>
                </lil>
                <lil>
                    <Link to="/habits" id="a">Habits</Link>
                </lil>
                <lil>
                    <Link to="/statistics" id="a">Statistics</Link>
                </lil>
            </ul>
        </nav>
    )
}

export default NavBar
