import React, { Component } from 'react';
import { Button } from 'element-react';
import TestCom from '../Component/index'
import './index.css'

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            name: '测试点击',
            eventName: 'event测试'
        };
        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用。 如果bind方法麻烦的话，可以用属性初始化器语法或者在事件中使用箭头函数解决this的问题
        // 构造函数中，建议使用属性初始化语法，因为在事件中用箭头函数的话，这个回调函数作为一个属性值传入低阶组件，这些组件可能会进行额外的重新渲染
        // this.handleClick = this.handleClick.bind(this);   //绑定挂载事件
    }
    // 使用箭头函数
    handleClick(name, e){
        console.log(name)
        this.setState( state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    // 属性初始化器语法
    handleClick2 = () => {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
    }
    // 也可以在事件中使用bind
    handleClick3(name, e){ // 事件对象e要放到后面
        console.log(name)
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
    }
    // 子组件事件
    // 从 render 中传递参数到 外部函数 one()

    render() {
        return (
            <div className="Event-Box">
                <p className="Event-Tit">事件</p>
                < TestCom name={this.state.eventName}/>
                {/*属性初始化器语法*/}
                <Button onClick={this.handleClick2}>属性初始化器</Button>
                {/*事件中使用箭头函数*/}
                <Button onClick={(e) => this.handleClick(this.state.name, e)}>箭头函数</Button>
                {/*也可以在事件中使用bind*/}
                <Button onClick={this.handleClick3.bind(this, this.state.name)}>事件中使用bind</Button>
                <p>当前状态：{this.state.isToggleOn ? '激活' : '未激活'}</p>
            </div>
        );
    }
}
export default Event;
