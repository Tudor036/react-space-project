import React from "react";
import { Link } from "react-router-dom";
import './ActionButton.styles.scss';

const ActionButton = () => {
    return (
        <Link to="/destinations" style={{ textDecoration: 'none' }}>
            <div className="action__button">
                <p className="heading-4 dark-blue">Explore</p>
            </div>
        </Link>
    )
}

export default ActionButton;