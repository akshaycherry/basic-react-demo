
import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    incrementFive(){
        this.increment1();
        this.increment1();
        this.increment1();
        this.increment1();
        this.increment1();
    }

    increment(){
        this.setState({count:this.state.count + 1},()=>{
            console.log("callback value",this.state.count);
        });
        console.log(this.state.count);
    }

    increment1(){
        this.setState
            (prevState=>({count:prevState.count + 1}),()=>{console.log(this.state.count);});
    
    }
    
    render() {
        return (
            <div>
              <h1>count -{this.state.count}</h1>  
               <button onClick={()=>this.incrementFive()}>submit</button>
            </div>
        )
    }
}


