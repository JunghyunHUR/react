import React from 'react';
import OnClick from './component/ReactOnClick';
import OnChange from './component/ReactOnChange';
import OnMouseMove from './component/ReactOnMouseMove';
import OnMouseOver from './component/ReactOnMouseOver';
import Currying from './component/ReactCurrying';

const App = () => {
  return (
    <div>
      <OnClick />
      <OnChange />
      <OnMouseMove />
      <OnMouseOver />
      <Currying />
    </div>
  );
};

export default App;