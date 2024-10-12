import React from 'react';
import './Nav.css';
const Navbar = () => {
return (
<>
<nav className='main-nav'>
    <div className='logo'>
        <h2> ADVANCED ↔ FRONTEND </h2>
    </div>

    <div className='menu'>
        <ul>
            <li><a href="#">Home</a></li>
        </ul>
        <ul>
            <li><a href="#">About</a></li>
        </ul>
        <ul>
            <li><a href="#">Services</a></li>
        </ul>
        <ul>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
</nav>
</>
);
};
export default Navbar;