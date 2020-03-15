import Canvas from 'react-responsive-canvas';
import React, { Component } from 'react'
import Screen from './imgs/screen.png'
import bitHi from './imgs/bitHi.png'
import Image from 'react-bootstrap/Image'
import GoogleFontLoader from 'react-google-font-loader';
import { TaskTimer } from 'tasktimer';
const texts = [
  'a anime fan.',
  'a lifetime learner.',
  'a ethereum follower.',
  'a raptors fan.',
  'I\'m learning Machine Learning.',
  'a dreamer.',
  'a hard worker.',
  'a versatile individual.',
  'I\'m calculating time complexity.',
  'I\'m proving by induction.',
  'a gamer.',
];



class TitlePage extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
      heightSet: 0,
      currentTextcurrentText: "a Dreamer."
  };
  this.updateDimensions = this.updateDimensions.bind(this);
  const timer = new TaskTimer(1000);
  timer.on('tick', () => {
    this.changeMessage() 
    console.log('tick count: ' + timer.tickCount);
  });
  timer.start();
}
changeMessage() {
  var i = Math.floor(Math.random() * 11);
  const currentText = texts[i]
  console.log(currentText)
  
  this.setState({
    currentText
  })
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

  render () {

    const divStyle = {
      position: "relative",
      backgroundColor: "#F5EBE8",
      height: this.state.heightSet,
      width: "100%",
      backgroundsize: "cover",
      position: "relative",
    };

    const introStyle = {
      
      top: "10%",
      position: "relative",
      fontSize: "3.5vw",
      fontSize:  "min(6vw, 7vh)",
      fontFamily: 'Quantico',
      whiteSpace: "normal",
      textAlign: "left",
      width: "90%",
      left: "5%"

    }

    const introp1 = {
      top: "20%",
      position: "relative",
      fontSize: "2vw",
      fontSize:  "min(4vw, 4.5vh)",
      fontFamily: 'Electrolize',
      whiteSpace: "normal",
      marginBottom: "0",
      textAlign: "left",
      width: "90%",
      left: "5%"

      

    }
    const introp2 = {
      
      top: "19%",
      position: "relative",
      fontSize: "2vw",
      fontSize:  "min(4vw, 4.5vh)",
      fontFamily: 'Electrolize',
      whiteSpace: "normal",
      marginTop: "0",
      textAlign: "left",
      width: "90%",
      left: "5%"

    }
    const introp3 = {

      top: "25%",
      position: "relative",
      fontSize: "1.5vw",
      fontSize:  "min(3vw, 3vh)",
      fontFamily: 'Bubbler One',
      whiteSpace: "normal",
      textAlign: "left",
      width: "90%",
      left: "5%"

      

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
      postion : "relative",
      width : "100%",
      height : "110% ",
      zIndex: "-1",   
     

    }

    const imageBitme = {
      postion : "absolute",
      zIndex: "3",
      width : "10%",
      height : "10% ",
      top : "100px",
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
            <h1 style = {introStyle}>  Hello world, 👋 </h1>
            <p style = {introp1} > My name is Tony Wong.</p>
            <p style = {introp2}> I'm a full stack developer and {this.state.currentText} </p>
            <p style = {introp3}> Currently a programmer in my 3rd Year at University of Calgary and looking for internship opportunities.</p>
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

export default TitlePage

