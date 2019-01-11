import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'element-react';
import Frist from './first/index'
import FunTest from './fun/index'
import TestCom from './Component/index'
import Clock from './clock/index'
import Event from './event/index'
import Term from './term/index'
import List from './list/index'
import NumberList from './list/item'
import TestComApi from './Component/api'
import HookFun from './hookFun/index'

function Name(props) {
    // console.log(props)
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
            judgeState: true,
            listName: '列表',
            lists: [
                {id:1, value:'测试1'},
                {id:2, value:'测试2'},
                {id:3, value:'测试3'},
                {id:4, value:'测试4'},
            ],
            judgeHookFunClose: true
        }
    }
    changeHookFunShowState() {
        this.setState({
            judgeHookFunClose: !this.state.judgeHookFunClose
        })
    }
    render() {
        var ele = null
        this.state.judgeHookFunClose ? ele = <HookFun /> : ele = ''
        return (
              <div className="App">
                    <div>
                        {ele}
                        <Button onClick={(e) => this.changeHookFunShowState(e)}>点击切换</Button>
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                        </header>
                        <Frist name={this.state.name} year={this.state.year}/>
                        <Name name="这是自定义参数" obj={this.state}/>
                        <TestCom />
                        <Clock />
                        <FunTest />
                        <hr />
                        <Event />
                        <hr />
                        <Term judgeState={this.state.judgeState}/>
                        <hr />
                        < List name={this.state.listName}/>
                        <hr />
                        < NumberList numbers={this.state.lists}/>
                        <hr />
                        <TestComApi />
                    </div>
              </div>
        );
    }
}
export default App;
