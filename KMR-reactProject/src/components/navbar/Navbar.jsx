import React from 'react';
import classes from './Navbar.module.css';
import {Link} from 'react-router-dom';
import logo from '../../Auth/logo.png'

const Navbar = () => {
    return (
        <>
        <header className={classes.header}>
            
            <ul className={classes.menu}>
                <li className={classes.logo}>
                    <Link to="/">
                         <img src={logo} alt="logo" />
                    </Link>
                </li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About us</Link></li>
            </ul>
        </header>
            
        </>
    );
}

export default Navbar;
