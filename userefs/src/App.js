import React, {useState, useRef, useEffect} from 'react';
import "./App.css";


/**
 * 1. useRef는 리렌더링 되지 않는다.
 * 2. useRef는 변수의 저장 공간이다.
 * 3. 즉, 리렌더링 되었다 하더라도 Ref의 값은 유지된다.
 */
const App = () => {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("렌더링 수 : " + renderCount.current);
  },[count]);

  return (
    <>
      <h1>Count : {count}</h1>
      <h1>RenderCount : {renderCount.current}</h1>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
    </>
  );
};

export default App;