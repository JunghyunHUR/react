import React from 'react';

const Car = (props) => {
    return (
        <div>
            <li>
                이름 : {props.username} <br />
                아이디 : {props.name} <br />
                이메일 : {props.email} <br />
                전화번호 : {props.phone}
            </li>
        </div>
    );
};

export default Car;