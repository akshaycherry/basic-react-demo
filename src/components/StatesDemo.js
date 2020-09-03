import React, { Component } from 'react'

export class StatesDemo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    increment(){
        this.setState(preveState=>({
            count: preveState.count + 1
        }
        ));
        
    }
    
    render() {
        return (
            <div>
                <h1>count - {this.state.count}</h1>
                <button onClick={()=>this.incrementFive()}>submit</button>
            </div>
        )
    }
}

export default StatesDemo;
