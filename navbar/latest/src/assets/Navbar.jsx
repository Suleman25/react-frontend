import React from 'react';
import './Nav.css';
const Navbar = () => {
return (
<>
<nav className='main-nav'>
    <div className='logo'>
        <img src="https://lionchalk.com/wp-content/uploads/2019/08/cropped-color-logo-no-background-e1563733491815.png" alt="" />
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