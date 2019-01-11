// 组件的生命周期可分成三个状态：
// Mounting：已插入真实 DOM
// Updating：正在被重新渲染
// Unmounting：已移出真实 DOM

// 生命周期方法
// componentWillMount 在渲染前调用,在客户端也在服务端。
// componentDidMount : 在第一次渲染后调用，只在客户端。
// componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
// shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
// componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
// componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
// componentWillUnmount在组件从 DOM 中移除之前立刻被调用。
import React from 'react'
import './index.css'
import { Button } from 'element-react';

class HookFun extends React.Component {
    constructor() {
        super()
        this.state= {
            opacity: 0,
            name: '测试透明度',
            judgeClose: true
        }
    }
    // 在渲染前调用
    componentWillMount() {
        console.log("在渲染前调用")
    }
    // 在第一次渲染后调用
    componentDidMount() {
        console.log('在第一次渲染后调用')
        this.timer = setInterval(() => {
            this.setState({
                opacity: this.state.opacity +.1
            })
        }, 100)
    }
    // 在组件接受到新的prop（更新后）调用
    componentWillReceiveProps(newProps) {
        console.log("在组件接受到新的prop（更新后）调用")
    }
    // 返回一个布尔值，在组建接收到新的props或者state时调用
    shouldComponentUpdate(newProps, newState) {
        console.log("返回一个布尔值，在组建接收到新的props或者state时调用")
        return true
    }
    // 在组件接收到新的props或者state但还没有render时被调用 在初始化时不会被调用。
    componentWillUpdate(nextProps, nextState) {
        console.log('在组件接收到新的props或者state但还没有render时被调用')
    }
    // 在组件完成更新后立即调用。在初始化时不会被调用
    componentDidUpdate(prevProps, prevState){

        if (prevState.opacity >= 1) {
            clearInterval(this.timer)
        }
        console.log('在组件完成更新后立即调用。在初始化时不会被调用')
    }
    // 在组件从 DOM 中移除之前立刻被调用
    componentWillUnmount(){
        console.log('在组件从 DOM 中移除之前立刻被调用')
    }
    // 查看状态组件
    closeHookFunTem = () => {
        this.setState({
            judgeClose: !this.state.judgeClose
        })
        console.log(this.state.judgeClose)
    }

    render(){
        return (
            <div className="Hook_Box" style={{opacity: this.state.opacity}}>
                <p>{this.state.name}</p>
                <Button onClick={this.closeHookFunTem}>点击查看钩子状态</Button>
            </div>
        )
    }
}
export default HookFun
