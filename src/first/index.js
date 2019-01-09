import React, { Component } from 'react';

var num = 300

class Test extends Component {
    render() {
        return (
            <div>
                <h2>{100 + 100 === num ? '正确' : '错误'}</h2>
                <p>
                    <span>姓名：{this.props.name}</span>
                    <span>年龄：{this.props.year}</span>
                </p>
            </div>
        );
    }
}
export default Test;
