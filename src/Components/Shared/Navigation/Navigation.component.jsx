import React, { useState } from "react";
import { Link } from "react-router-dom";

import './Navigation.styles.scss'

import data from '../../../Assets/data.json';

const Navigation = ({ active }) => {

    const [sections, setSections] = useState(['home', ...Object.keys(data)]);

    return (
        <nav>
            {sections.map((item, index) => {
                return (
                    <Link className={`nav-text ${item === active ? `active` : null}`} key={index} to={`/${item.toLowerCase()}`}><b>{`0${index}`}</b> {item}</Link>
                )
            })}
        </nav>
    )
}

export default Navigation;