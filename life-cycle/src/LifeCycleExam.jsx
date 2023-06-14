import React from "react";

class LifeCycleExam extends React.Component{

    //props 로 받은 것은 state 에 넣어주고 싶을 때 사용
    static getDerivedStateFromProps(){
        console.log("getDerived 호출");
    }

    //생성자 메소드 (컴포넌트가 만들어지면 가장 먼저 실행되는 메소드)
    constructor(props){
        super(props);
        this.state = {};
        console.log("생성자 호출");
    }

    //컴포넌트가 렌더링을 마치면 호출
    componentDidMount(){
        console.log("didMount 호출");
    }

    //컴포넌트가 리렌더링 할지 말지 결정하는 매소드
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate 호출");
        /*
            return nextState.number % 10 == 0;
        */
        return true;
    }
    
    //필수
    render(){
        console.log("render 호출");
        return null;
    }
    
}

export default LifeCycleExam;