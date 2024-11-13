import React, { useEffect } from 'react';
import { Button, Popover } from 'antd';
import "./styles/NavBar.css";
import UserAuth from './Authentication/UserAuth';

const logoText = "Inuka";

const navItems = [
    { id: 'home', label: 'Home', onClick: () => { } },
    { id: 'charity', label: 'Charity', onClick: () => { } },
    { id: 'donor', label: 'Donor', onClick: () => { } },
    // { id: 'admin', label: 'Admin', onClick: () => { } },
    // { id: 'our_impact', label: 'Our Impact', onClick: () => { } },
    { id: 'about_us', label: 'About', onClick: () => { } },
    { id: 'stories', label: 'Stories', onClick: () => { } },
    { id: 'donate', label: 'Donate Now', onClick: () => { } },
];

const popoverContent = (
    <div>
        <a href='#UserAuth' id="admin">Admin</a><br /><br />
        <a href='#UserAuth' id="charity">Charity</a><br /><br />
        <a href='#UserAuth' id="donor">Donor</a><br />
    </div>
);

const NavBar = () => {
    useEffect(() => {
        const handleNavItemClick = (event) => {
            const navLinks = document.querySelectorAll('.nav-item');
            navLinks.forEach(link => link.classList.remove('active'));
            event.currentTarget.classList.add('active');
        };

        const navLinks = document.querySelectorAll('.nav-item');
        navLinks.forEach(link => link.addEventListener('click', handleNavItemClick));

        return () => {
            navLinks.forEach(link => link.removeEventListener('click', handleNavItemClick));
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <h3 id="logo-text">{logoText}</h3>
                <div className="navbar-section" id="navbarNav">
                    <ul className="navbar-nav">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    type="button"
                                    className="nav-item"
                                    id={item.id}
                                    onClick={item.onClick}
                                    aria-label={item.label}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                        <li>
                            <Popover content={popoverContent} title="Login as:">
                                <Button id='sign-in' className="nav-item" type="primary">Sign In</Button>
                            </Popover>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
export { navItems };