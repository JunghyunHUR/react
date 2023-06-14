import React from 'react';

const ReactCurrying = () => {

    const plusNumOrString = (c, d) => {
        return c + d;
    }

    const plusFuncA = (a) => {
        return function(b){
            return plusNumOrString(a, b);
        } 
    }

    const plusFuncB = (a) => b => plusNumOrString(a , b);

    const plusFuncC = (a) => {
        return plusFuncA(a)(200);
    }
    const plusFuncD = (a) => {
        return plusFuncB(a)(200);
    }

    
    // const 변수명1 = (매개변수) => {
    //     return 타입;
    // }

    // const 변수명2 = 매개변수 => 타입;

    return (
        <div>
            <input type="button" value="numberPlus" 
                    onClick={ e => alert(plusFuncC(100))} />
            
            <input type="button" value="StringPlus" 
                    onClick={ e => alert(plusFuncD("홍길동"))} />

        </div>
    );
};

export default ReactCurrying;