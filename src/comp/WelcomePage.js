import React, { Component } from 'react'
import IntroPage from './IntroProject'
import TitlePage from './TitlePage'
import MyBar from './MyBar'


class WelcomePage extends Component {
    render(){
        return <div>
            <MyBar/>
            <TitlePage/>
            <IntroPage/>       
             </div>
    }
}

export default WelcomePage