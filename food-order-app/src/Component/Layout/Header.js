import React from "react";
import classes from './Header.module.css';
import HeaderCardButton from "./HeaderCartButton";
import headerImage from '../../assets/meals.jpg';

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCardButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={headerImage} alt="Meals"/>
            </div>

        </>
    )
}
export default Header;