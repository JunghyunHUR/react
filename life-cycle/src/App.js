import React from 'react';
import './App.css';
import Counter from './component/Counter';
import DerivedCount from './component/DerivedCount';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {count : 10};
    this.resetCount = this.resetCount.bind(this);
    
  }
  resetCount(){
    this.setState(({count}) => ({count : count + 10}));
  }
  render() {
    return (
      <div>
        <div>
          <Counter count={this.state.count} />
        </div>
        <div>
          <DerivedCount count={this.state.count} />
        </div>
        <div>
          <button type="button" onClick={this.resetCount}>{this.state.count + 10}으로 초기화 합니다.</button>
        </div>
      </div>
    );
  }
}


export default App;

