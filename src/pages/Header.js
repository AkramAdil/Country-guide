import React from 'react';
import "./HeaderStyle.css"
const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <h3 className="logo">
                    Country Guide
                </h3>
                <div className="mode">
                    <i className='bx bx-moon'></i> Dark Mode
                </div>
            </div>
        </div>
    );
};

export default Header;