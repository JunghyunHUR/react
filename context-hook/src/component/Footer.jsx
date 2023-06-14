import React, {useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
    const {isDark, setIsDark} = useContext(ThemeContext);

    const ChangeMode = () => {
        setIsDark(!isDark);
    }
    
    return (
        <footer className='footer'
        style={{
            background: isDark ? "black" : "lightgray",
            color : isDark ? "white" : "black"
        }}>
            <button onClick={ChangeMode}>Change Mode</button>
        </footer>
    );
};

export default Footer;