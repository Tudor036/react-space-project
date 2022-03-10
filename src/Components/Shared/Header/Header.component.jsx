import React from "react";
import './Header.styles.scss';

import Logo from "../Logo/Logo.component";
import Navigation from "../Navigation/Navigation.component";
import Hamburger from "../Hamburger-icon/Hamburger.components";

const Header = ({ active }) => {
    const screenWidth = window.screen.width;

    return (
        <header>
            <Logo />
            <div className="line"></div>
            {screenWidth > 767 ? <Navigation active={active} /> : <Hamburger />}
        </header>
    )
}

export default Header;