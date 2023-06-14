import React, {useState} from 'react';
import './App.css';
import Timer from './Timer';
import Count from './count';

const App = () => {

  const [showTimer, setShowTimer] = useState(false);

  return (
    <>
      {showTimer && <Timer/>}
      <button onClick={() => setShowTimer(!showTimer)}>
        Toggle Timer
      </button>
      <hr />
      <Count/>
    </>
  );
};

export default App;