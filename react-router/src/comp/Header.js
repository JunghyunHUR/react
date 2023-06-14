import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>헤더 입니다.</h1>
            <Link to="/">메인페이지</Link> &nbsp;&nbsp;&nbsp;
            <Link to="/product/1">첫번째 상품</Link> &nbsp;&nbsp;&nbsp;
            <Link to="/product/2">두번째 상품</Link> &nbsp;&nbsp;&nbsp;
            <Link to="/product/3">세번째 상품</Link> &nbsp;&nbsp;&nbsp;
            <Link to="/product/4">네번째 상품</Link> &nbsp;&nbsp;&nbsp;
            <Link to="/product/5">다섯번째 상품</Link> &nbsp;&nbsp;&nbsp;
            <Link to="/product/6">여섯번째 상품</Link> &nbsp;&nbsp;&nbsp;
            
        </div>
    );
};

export default Header;