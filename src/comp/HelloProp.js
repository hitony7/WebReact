import React from 'react'
//example of arrow function with props
const HelloProp = (props) => {
    console.log(props);
return <h1>Hello {props.name} a.k.a {props.heroname}</h1> 
}

export default HelloProp