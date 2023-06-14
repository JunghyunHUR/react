import React from 'react';
import SubCom03 from './SubCom03';

const SubCom02 = (props) => {
    return (
        <div>
            <h1>SubCom02 입니다.</h1>
            <SubCom03 content={props.content} />
        </div>
    );
};

export default SubCom02;