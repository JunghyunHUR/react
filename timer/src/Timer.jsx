import React from 'react';
import { useEffect } from 'react';

const Timer = () => {

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("타이머가 돌아가는 중입니다.");
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("타이머가 종료되었습니다.");
        }
    }, []);

    return (
        <>
          <h3>타이머를 시작합니다.</h3>  
          <p>콘솔창을 보세요</p>
        </>
    );
};

export default Timer;