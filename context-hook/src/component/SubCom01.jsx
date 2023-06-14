import React from 'react';
import SubCom02 from './SubCom02';

const SubCom01 = (props) => {
    return (
        <div>
            <h1>SubCom01 입니다.</h1>
            <SubCom02 content={props.content} />            
        </div>
    );
};

export default SubCom01;