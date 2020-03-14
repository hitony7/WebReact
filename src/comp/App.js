import Canvas from 'react-responsive-canvas';
import React, { Component } from 'react'
import Screen from './imgs/screen.png'
import Image from 'react-bootstrap/Image'
import GoogleFontLoader from 'react-google-font-loader';



class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
      heightSet: 0,
  };
  this.updateDimensions = this.updateDimensions.bind(this);
}

componentDidMount() {
  this.updateDimensions();
  window.addEventListener('resize', this.updateDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateDimensions);
}

updateDimensions() {
  const margin = 16; // In my case was marginTop: 8px and marginBottom: 8px
  const heightSet = window.innerHeight - margin;
  console.log(heightSet);
  console.log(window.innerHeight);
  this.setState({ heightSet });
}
 /* componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    this.draw();
}
draw(){
  const image = new Image();
  image.src = Screen;
  image.onload = () => {
    this.ctx.fillStyle = '#393534';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
    console.log(this.canvas.height)
  };

}
*/
/*
  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    const img = this.refs.image
    this.draw(img);
    
  }
 */
/*
  draw() {
    // Draw whatever
    this.ctx.drawImage(img, 0, 0)
    this.ctx.globalCompositeOperation = 'destination-over';
    this.ctx.fillStyle = 'rgba(0,255,0,1)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "blue";
    console.log("your adsamda");
  }
  */
  render () {

    const divStyle = {
      position: "relative",
      backgroundColor: "#F5EBE8",
      height: this.state.heightSet,
      width: "100%",
      backgroundsize: "cover",
    };

    const introStyle = {
      
      top: "200px",
      left: "20%",
     // position: "absolute",
      fontSize: "5vw",
      fontSize: "5vh",
      fontFamily: 'Quantico',
      margin: "0",
      padding: "0",
    }

    const introp1 = {
      
      top: "200px",
      left: "20%",
     // position: "absolute",
      fontSize: "3vw",
      fontSize: "3vh",
      fontFamily: 'Electrolize',
      margin: "0",
      padding: "0",
      

    }
    const introp2 = {
      
      top: "200px",
      left: "20%",
     // position: "absolute",
      fontSize: "3vw",
      fontSize: "3vh",
      fontFamily: 'Electrolize',
      margin: "0",
      padding: "0",
      

    }
    const introp3 = {
      
      top: "200px",
      left: "20%",
     // position: "absolute",
      fontSize: "2.5vw",
      fontSize: "2.5vh",
      fontFamily: 'Bubbler One',
      margin: "0",
      padding: "0",
      

    }
    const wordbox = {
      position: "absolute",
     // borderColor: "red",
      zIndex: "2",
      borderWidth:"1px",
      borderStyle:"solid",
      height: this.state.heightSet/2,
      width: "71%",
      top: "21%",
      left: "50%",
      marginLeft: "-34%",
      overflow: "auto",

    }

    const imageStyle = {
      width : "100%",
      height : "110% ",
      zIndex: "-1",
      postion : "absolute",
      top: "500px",

      

    }
    return (

      <div style= {divStyle}>
                  <GoogleFontLoader
                  fonts={[
                  {
                    font: 'Electrolize',
                    weights: [400, '400i'],
                  },
                  {
                    font: 'Quantico',
                    weights: [400, 700],
                  },
                  {
                    font: 'Bubbler One',
                    weights: [400, 700],
                  },
                ]}
                subsets={['cyrillic-ext', 'greek']}
              />
          <div style = {wordbox}>
            <h1 style = {introStyle}>Hello world, </h1>
            <p style = {introp1} >My name is Tony Wong.</p>
            <p style = {introp2}>I'm a full stack dev and (Dynamic State change here)</p>
            <p style = {introp3}>Currently a student programmer in my 3rd Year at University of Calgary and looking for internship opportunities.</p>
        </div>
          
        <Image
                      src= { Screen }
                      alt="Montoir"
                      ref="image"
                      style = {imageStyle}
                    />
      </div>
    );
  }
}

export default App

