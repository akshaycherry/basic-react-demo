import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet';
//import Welcome from "./components/Welcome"
//import Message from "./components/message"
//import { Counter } from './components/Counter';
import Destructuring from "./components/Destructuring"
import StatesDemo from './components/StatesDemo';

class App extends Component {
  render(){
   /* return(
      <div>
    <!--<div>
      <Greet firstName="akshay" age="25"> 
    <p>This is the Child element</p>
    <button>submit</button>
    </Greet>
    <Greet firstName="cherry" age="newly born">
      <button>submit</button>
    </Greet>
    </div>

    <div>
      <Welcome name="akshay" city="utica">
        <h1>this is welcome component children element</h1>
      </Welcome>
    </div>
    </div>
    );*/

   /* return(
      <div>
        <Message>
        </Message>
      </div>
    );

    return(
      <div>
        <Counter>
          
        </Counter>
      </div>
    );

    return(
      <div>
        <h1>
        <Destructuring name="akshay" age="25">
          </Destructuring>
        </h1>
        
      </div>
    );*/

    return(
      <StatesDemo></StatesDemo>
    );
  }
}

export default App;
