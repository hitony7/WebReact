import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greet from './comp/Greet'
import WClass from './comp/WClass'
import HelloProp from './comp/HelloProp'
import MyBar from './comp/MyBar'
import IntroPage from './comp/IntroPage'
import Canvas from './comp/App'


function App() {
  const divStyle = {
    position: "relative",
    top: "1000px"
  };
  return (
    <div className="App" postion = "relative" >
      <MyBar/>
      <Canvas/>
      <IntroPage/>
      <div style= {divStyle} >      
          <h1>Hey this my website, I'm currently redoing it </h1>
          <h3>Only my github/linkin logo work ATM </h3>
          <p>last updated Mar-14-2020 </p>
      </div>
    </div>
  );
}

export default App;
