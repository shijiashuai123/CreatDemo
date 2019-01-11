// 组件的生命周期可分成三个状态：
// Mounting：已插入真实 DOM
// Updating：正在被重新渲染
// Unmounting：已移出真实 DOM

// 生命周期方法
// componentWillMount 在渲染前调用,在客户端也在服务端。
// componentDidMount : 在第一次渲染后调用，只在客户端。

import React from 'react'
import './index.css'

class HookFun extends React.Component {
    constructor() {
        super()
        this.state= {
            opacity: 1,
            name: '测试透明度'
        }
    }
    componentDidMount() {
        setInterval(() => {
            if (this.state.opacity) {
                this.setState({
                    opacity: this.state.opacity -.3
                })
            }
        }, 100)
    }
    render(){
        return (
            <div className="Hook_Box" style={{opacity: this.state.opacity}}>
                <p>{this.state.name}</p>
            </div>
        )
    }
}
export default HookFun
