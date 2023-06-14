import React, {useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

const Content = () => {
    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);
    return (
        <div className='content'
        style={{
            background: isDark ? "#666" : "white",
            color : isDark ? "white" : "black"
        }}>
            <p>{user}님, 제 APP PAGE에 오신것을 환영합니다.</p>
        </div>
    );
};

export default Content;