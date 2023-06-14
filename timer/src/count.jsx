import React, {useState} from 'react';
import { useEffect } from 'react';

const Count = () => {
    const [count, setCount] = useState(10);
    
    const up = () =>{
        setCount(count + 1);
    }
    const down = () => {
        setCount(count - 1);
    }
    
    return (
        <>
            <div>{count}</div>
            <button onClick={up}>up</button>
            <button onClick={down}>down</button>  
        </>
    );
};

export default Count;