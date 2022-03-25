import React from "react";
import './Header.styles.scss';

import Logo from "../Logo/Logo.component";
import Navigation from "../Navigation/Navigation.component";
import Hamburger from "../Hamburger-icon/Hamburger.components";
import { Link } from "react-router-dom";

const Header = ({ active }) => {
    const screenWidth = window.screen.width;

    return (
        <header>
            <Link to="/home"><Logo /></Link>
            <div className="line"></div>
            {screenWidth > 767 ? <Navigation active={active} /> : <Hamburger />}
        </header>
    )
}

export default Header;