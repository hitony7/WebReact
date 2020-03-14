import React, { Component } from 'react'
import Screen from './imgs/screen.png'

export class IntroPage extends Component {

    render() {
        //Bad to have inline style fix later
        const divStyle = {
            color: 'white',
            backgroundColor: "#393534",
            width: "100%",
            height: "100%", 
            margin: "0",
            padding: "0",
            position: "relative",
          };

        return (
            <div>
                   <canvas id="myCanvas" style={ divStyle } ref="canvas" >
                   </canvas>
            </div>
            
        )
    }
}

export default IntroPage
