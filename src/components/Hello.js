import React from 'react';

export const Hello=()=>{
    return React.createElement("div",{id:"divid"},
    React.createElement("h1",{id:"h1id"},"Hello React"));
};

export default Hello;