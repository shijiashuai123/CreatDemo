import React, { Component } from 'react';
import './index.css'
import TestCom from '../Component/index'
import { Button } from 'element-react';

class Term extends Component {
    constructor(props) {
        super(props);
        this.state = {
            termName: 'term测试',
            judge: this.props.judgeState,
        };
    }
    // 属性初始化器语法
    changeJudgeValue = () => {
        console.log('点击了')
        this.setState({
            judge: !this.state.judge
        })
    }
    render() {
        console.log(this.state.judge)
        var ele = null
        if (this.state.judge) {
            ele =   <TestCom name={this.state.termName} onClick={this.changeJudgeValue}/>
        } else {
            ele = <div>为空了</div>
        }
        return (
            <div className="Term-box">
                <p className="Term-Tit">条件渲染</p>
                <Button onClick={this.changeJudgeValue}>点击改变</Button>
                {ele}
            </div>
        );
    }
}
export default Term;
