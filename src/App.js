import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Frist from './first/index'
import TestCom from './Component/index'
import Clock from './clock/index'
import Event from './event/index'
import Term from './term/index'

function Name(props) {
    console.log(props)
    return <h2>
                <p>自定义名称：{props.name}</p>
                <span>名字：{props.obj.name}</span>
                <span>年龄：{props.obj.year}</span>
            </h2>
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            name: '测试1',
            year: 18,
            judgeState: true
        }
    }
    render() {
        return (
              <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                    </header>
                    <Frist name={this.state.name} year={this.state.year}/>
                    <Name name="这是自定义参数" obj={this.state}/>
                    <TestCom />
                    <Clock />
                    <hr />
                    <Event />
                    <hr />
                    <Term judgeState={this.state.judgeState}/>
              </div>
        );
    }
}
export default App;
