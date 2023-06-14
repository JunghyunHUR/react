import React, {useState, useEffect} from 'react';

const Test = () => {
    const [count , setCount] = useState(1);
    const [name, setName] = useState("");
    const handleUp = () => {
        setCount(count + 1);
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }
    
    useEffect(() => {
        console.log("useEffect가 실행됨");
    },[count]);
    
    console.log('useState가 화면을 렌더링 함')
    return (
        <div>
            <div><strong>카운트 : {count}</strong></div>
            <button onClick={handleUp}>카운트증가</button>
            <div>
                <input type="text" value={name} onChange={handleChange}/>
            </div>
            <div>
                name : {name}
            </div>
        </div>
    );
};

export default Test;