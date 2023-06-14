import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <h1>Layout</h1>
            <nav>
                <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;
                <Link to="blogs">Blogs</Link> &nbsp;&nbsp;&nbsp;
                <Link to="contact">Contact</Link> &nbsp;&nbsp;&nbsp;
            </nav>

            <Outlet />
        </div>
    );
};

export default Layout;