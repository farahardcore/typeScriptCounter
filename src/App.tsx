import React from 'react';
import './App.css';
import Counter from "./counter";
import Button from "./Button";

class App  extends React.Component {
    state: {count:number} = {
        count: 1
    };

    increaseCounter:()=>void=()=>{
        let int : number = this.state.count + 1;
        this.setState({count: int})

    };

    resetCounter:()=>void=()=> {
        this.setState({count: 0})
    };
    render() {
        return (
            <div className="main">
                <div className="app-wrapper">
                    <Counter int={this.state.count}/>
                    <div className="buttons">
                        <Button name="Increase" buttonAction={this.increaseCounter}/>
                        <Button name="Reset" buttonAction={this.resetCounter}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
