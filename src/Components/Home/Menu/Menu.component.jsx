import React, { useState } from "react";
import { Link } from "react-router-dom";

import data from '../../../Assets/data.json';

const Menu = () => {

    const [sections, setSections] = useState([['home', ...Object.keys(data)]]);

    return (
        <menu>
            {sections.map((item, index) => {
                return (
                    <Link className={`nav-text`} key={index} to={`/${item}`}><b>{`0${index}`}</b> {item}</Link>
                )
            })}
        </menu>
    )
}

export default Menu;