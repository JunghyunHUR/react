import React from 'react';

const ReactOnMouseMove = (e) => {
    const mouseMove = (tag) => {
        console.log("TAG : " + tag);
        // console.log(e);
    }
    return (
        <div style={{padding : "80px"}}>
            <div style={{padding : "40px", border : "1px solid #333"}} 
                 onMouseMove={ (e) => {mouseMove("div")}}>
                <h3>DIV onMouseMove Event</h3>
            </div>
        </div>
    );
};

export default ReactOnMouseMove;