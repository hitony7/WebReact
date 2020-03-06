import React from 'react'

const HelloProp = (props) => {
    console.log(props);
return <h1>Hello {props.name} a.k.a {props.heroname}</h1> 
}

export default HelloProp