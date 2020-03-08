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
    </div>
  );
}

export default App;
