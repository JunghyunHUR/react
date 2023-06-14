import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar className='justify-content-between'>
            <Link to="category">category</Link>
            <Link to="about">about</Link>
            <Link to="contact">contact</Link>
            <Link to="doodle">낙서장</Link>
            <Link to="community">community</Link>
        </Navbar>
    );
};

export default Navigation;