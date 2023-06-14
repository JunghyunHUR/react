import React from 'react';
import {useParams} from "react-router-dom";

const Product = () => {
    const {pid} = useParams();
    return (
        <div>
            <h1>{pid}번 상품 페이지 입니다.</h1>
        </div>
    );
};

export default Product;