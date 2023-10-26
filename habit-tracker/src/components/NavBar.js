import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <ul>
                <lil>
                    <Link to="/overview">Overview</Link>
                </lil>
                <lil>
                    <Link to="/habits">Habits</Link>
                </lil>
                <lil>
                    <Link to="/statistics">Statistics</Link>
                </lil>
            </ul>
        </nav>
    )
}

export default NavBar
