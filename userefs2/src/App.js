import React, {useState, useRef, useEffect}from 'react';
import "./App.css";
/**
 * 4. ref는 dom을 저장하는 기능이 있다.
 * 
 */
const App = () => {

  const domRef = useRef();

  useEffect(() => {
    console.log(domRef);
    // document.getElementById("h1").innerHTML = domRef.current.innerHTML;
    domRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다. ${domRef.current.value}님!!`);
    domRef.current.value = "";
    domRef.current.focus();
  }

  return (
    <>
      {/* <div ref={domRef} style={{display : "none"}}>useRef 연습입니다.</div> */}
      {/* <h1 id="h1"></h1> */}
      <input ref={domRef} type='text' placeholder='이름을 입력하세요' />
      <button onClick={login}>로그인</button>
    </>
  );
};

export default App;