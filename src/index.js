import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'element-theme-default';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// reactDom.render  根dom节点 两个参数 第一个创建的模板，第二个参数插入该模板的目标位置（dom元素）
// react 可以渲染html标签和react组件，
//        1：渲染html标签在jsx里使用小写字母的标签名，
//        2：渲染react组件，需是一个大写字母开头的本地变量
// 组件： 一种函数定义(function '组件名'(){retrun})
//        一种class定义：
//          class '组件名' extends React.Component{
//              render() {
//                  return()
//              }
//          }
//         两者的组件名都要是大写字母开头
// JSX 允许在大括号中嵌入任何表达式 但{} 中不能出现var,const,let等这种关键字