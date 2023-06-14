import './App.css';
import Header from "./component/Header";
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header title="처음하는 React" names="철수" />
      <Footer copy="Copyright jason 2023" />
    </div>
  );
}

export default App;
