import React from 'react';

const Header = ({title, names}) => {
    return (
        <div className="header">
            {title} , {names}
        </div>
    );
};

export default Header;