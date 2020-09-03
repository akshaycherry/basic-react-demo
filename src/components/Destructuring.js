//import React from 'react';
import React, { Component } from 'react';
/*const Destructuring= props =>{
    const{name,age}=props;
return(
    <div>
        <h1>
            Hello {name} age: {age}
        </h1>
    </div>
);
};*/

class Destructuring extends Component{
    render(){
        const {name,age} = this.props;
        return(
            <div>
                <h1>
                    name: {name} age: {age}
                </h1>
            </div>
        );
    }
}
export default Destructuring;

