import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greet from './comp/Greet'
import WClass from './comp/WClass'
import HelloProp from './comp/HelloProp'
import MyBar from './comp/MyBar'

function App() {
  return (
    <div className="App">
      <MyBar/>
      <h1>Hey this my website, I'm current redoing it </h1>
      <h3>Only my github/linkin logs work ATM </h3>
    </div>
  );
}

export default App;
