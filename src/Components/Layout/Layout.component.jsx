import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
    return (
        <main>
            <header>
                <h1>Title</h1>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>
            </header>
            <hr />
        </main>
    )
}

export default Layout;