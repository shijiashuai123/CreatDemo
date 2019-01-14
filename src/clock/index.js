import React, { Component } from 'react';

// 声明函数组件
function FormattedDate(props) {
    return <h2>(函数组件中)现在时间:{props.time.toLocaleTimeString()}
                <p>默认名称：{props.name}</p>
                <p>年龄：{props.year}</p>
            </h2>
}
// 组件属性： defaultProps设置属性的默认值（是一个对象）
// React.PropTypes 提供很多验证器 (validator) 来验证传入数据是否有效
FormattedDate.defaultProps = {
    name: '史嘉帅',
    year: 18
}

// 类组件
class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }
    componentDidMount() {
        this.timerId = setInterval( () => {
            this.tick()
        })
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }
    tick() {
        this.setState({
            time: new Date()
        })
    }
    render() {
        return (
            <div>
                <FormattedDate time={this.state.time}/>
                <p>(类组件中)现在时间：<span>{this.state.time.toLocaleTimeString()}</span></p>
            </div>
        );
    }
}
export default Clock;
