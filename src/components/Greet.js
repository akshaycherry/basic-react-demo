import React from 'react';

function Greet(props){
   // props.firstName="updated name";
    return (
        <div>
            <h1>Name:{props.firstName} Age:{props.age}</h1>
            {props.children}
        </div>
    );
}

export default Greet;