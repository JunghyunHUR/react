import './App.css';
import { useState } from "react";
import "./css/style.css";

const App = () => {
  const [bCount, setBCount] = useState(0);
  const [rCount, setRCount] = useState(0);
  const handleBClick = () => {
    setBCount(bCount + 1);
  }
  const handleRClick = () => {
    setRCount(rCount + 1);
  }
  return(
    <div>
      <div>
        <h3>파랑버튼 클릭 횟수 : {bCount} </h3>
        <button className="blue" onClick={handleBClick}>클릭하시오.</button>
      </div>
      <div>
        <h3>빨강버튼 클릭 횟수 : {rCount}</h3>
        <button className="red" onClick={handleRClick}>클릭하시오.</button>
      </div>
    </div>

  );
};

export default App;
