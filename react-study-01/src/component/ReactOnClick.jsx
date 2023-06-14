import React from 'react';

const ReactOnClick = () => {

    const buttonClick = (param) => {
        if(typeof param != "string") param = "Click a";
        console.log("param : " + param);
    }

    return (
        <>
            <button onClick={(e) => buttonClick("Click button")}>버튼 클릭</button>
            <div onClick={() => buttonClick("Click div")}>div 클릭</div>
            <a href="#" onClick={buttonClick}>a 클릭</a>
        </>
    );
};

export default ReactOnClick;