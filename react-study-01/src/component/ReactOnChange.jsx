import React from 'react';

const ReactOnChange = () => {

    const change = (e) => {
        let val = e.target.value;
        console.log("param : " + val);
    }

    return (
        <div>
            <input type="text" onChange={change} />
            <br /><br />
            <select onChange={change}>
                <option value="철수">철수</option>
                <option value="영희">영희</option>
            </select>
        </div>
    );
};

export default ReactOnChange;