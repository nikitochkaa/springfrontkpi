import React from 'react';

const TopNav = () => {
    return (
        <div className="header">
            <div className="name">
                <a href="/">Forum</a>
            </div>
            <nav>
                <ul className="menu">
                    <li>
                        <a href="/news">News</a>
                    </li>
                    <li>
                        <a href="#">Topics</a>
                    </li>
                    <li>
                        <a href="/signin">Sign In</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default TopNav;