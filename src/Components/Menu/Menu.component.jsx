import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import './Menu.styles.scss'
import data from '../../Assets/data.json';
import MenuContext from "../Context/MenuContext.component";
import CloseButton from "../Shared/Close-btn/CloseButton.conponent";

const Menu = ({ active }) => {

    const { currentMenuState, setMenuState } = useContext(MenuContext);
    const [sections, setSections] = useState(['home', ...Object.keys(data)]);

    function handleMenuStateChange() {
        return (currentMenuState) ? setMenuState(!currentMenuState) : null;
    }

    return (
        <menu>
            <CloseButton />
            {sections.map((item, index) => <Link onClick={handleMenuStateChange} className={`nav-text`} key={index} to={`/${item}`}><b>{`0${index}`}</b> {item}</Link>)}
        </menu>
    )
}

export default Menu;