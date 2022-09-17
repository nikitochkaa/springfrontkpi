import React from 'react';
import classes from "../styles/topnav.css";

const TopNav = () => {
    return (
        <div className="header">
            <div className="name">
                <a href="#">Forum</a>
            </div>
            <nav>
                <ul className="menu">
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Topics</a>
                    </li>
                    <li>
                        <a href="#">Sign Up</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default TopNav;