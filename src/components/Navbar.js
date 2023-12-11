import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    const navigateHandle = (path) => {
        navigate(path);
    }
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <ul>
                    <li style={{ fontWeight: "600", fontSize: 21 }}>DigiMart</li>
                    <li onClick={() => { navigateHandle("/") }}>Products</li>
                    <li onClick={() => { navigateHandle("/cart") }}>Cart<span>{}</span></li>
                    <li onClick={() => { navigateHandle("/create") }}>Add Product</li>
                </ul>
            </div>
            <div className="navbar-right">
                <span>Mohit</span>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" />
            </div>
        </nav>
    );
};

export default NavBar;
