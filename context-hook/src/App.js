import React, {useState} from 'react';
import "./App.css";
import Page from './component/Page';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from "./context/UserContext";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={"홍길동"}>
      <ThemeContext.Provider value={{isDark, setIsDark}}>
        <Page isDark={isDark} setIsDark={setIsDark}/>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export default App;