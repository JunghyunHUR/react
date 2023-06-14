
import './App.css';
import Rcc from './rs01/Rcc'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          나의 첫 리액트 입니다.
        </p>
        <Rcc />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          리액트 배우기
        </a>
      </header>
    </div>
  );
}

export default App;
