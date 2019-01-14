import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//路由的2种形式： hash(HashRouter) , H5的historyApi(BroswerRouter)是路由的容器，是组件，要包在路由的外面
// import { HashRouter as Router,Route} from 'react-router-dom'
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
import AjaxTest from './ajax/index'
import Side from './layout/index'

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


            judgeHookFunClose: false // 关闭钩子函数测试
        }
    }
    changeHookFunShowState() {
        this.setState({
            judgeHookFunClose: !this.state.judgeHookFunClose
        })
    }
    render() {
        var ele = null, dom = null
        this.state.judgeHookFunClose ? ele = <HookFun /> : ele = ''
        this.state.judgeHookFunClose ? dom = <div>
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
            <AjaxTest />
        </div> :
        // dom = <AjaxTest />
        dom = <div></div>
        return (
              <div className="App">
                    <Side />
                    {dom}
                    {/*<div>*/}
                        {/*{ele}*/}
                        {/*<Button onClick={(e) => this.changeHookFunShowState(e)}>点击切换</Button>*/}
                        {/*<header className="App-header">*/}
                            {/*<img src={logo} className="App-logo" alt="logo" />*/}
                        {/*</header>*/}
                        {/*<Frist name={this.state.name} year={this.state.year}/>*/}
                        {/*<Name name="这是自定义参数" obj={this.state}/>*/}
                        {/*<TestCom />*/}
                        {/*<Clock />*/}
                        {/*<FunTest />*/}
                        {/*<hr />*/}
                        {/*<Event />*/}
                        {/*<hr />*/}
                        {/*<Term judgeState={this.state.judgeState}/>*/}
                        {/*<hr />*/}
                        {/*< List name={this.state.listName}/>*/}
                        {/*<hr />*/}
                        {/*< NumberList numbers={this.state.lists}/>*/}
                        {/*<hr />*/}
                        {/*<TestComApi />*/}
                        {/*<AjaxTest />*/}
                    {/*</div>*/}
              </div>
        );
    }
}
export default App;
