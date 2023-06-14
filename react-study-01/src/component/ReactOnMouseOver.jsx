import React from 'react';

const ReactOnMouseOver = () => {
    const mouseOver = (over) => {
        console.log("OVER : " + over);
    }
    return (
        <div style={{padding : "80px"}}>
            <div style={{padding : "40px", border : "1px solid #333"}} 
                 onMouseOver={ (e) => {mouseOver("div")}}>
                <h3>DIV onMouseOver Event</h3>
            </div>
        </div>
    );
};

export default ReactOnMouseOver;