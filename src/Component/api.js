// 设置状态：setState
// 替换状态：replaceState
// 设置属性：setProps
// 替换属性：replaceProps
// 强制更新：forceUpdate
// 获取DOM节点：findDOMNode
// 判断组件挂载状态：isMounted
import React from 'react'
import { Button } from 'element-react';
import './api.css'

class TestComApi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 1
        }
    }
    changeNumValue = () =>{
        this.setState({
            num: this.state.num + 1
        })
    }
    render() {
        return(
            <div>
                <p className="Test_api">测试组件api</p>
                <Button onClick={this.changeNumValue}>点击</Button>
                <p>点击次数为{this.state.num}</p>
            </div>
        )
    }
}
export default TestComApi
