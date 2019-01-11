import React  from 'react';

// 新建一个react函数组件 大写字母开头的变量 （要有retrun()）
function ListTempTest(props) {
    console.log(props)
    return (
        <li>{props.obj.value}</li>
    )
}
// 新建的组件 大写开头里面有return()
function NumberList(props) {
    console.log(props.numbers)
    // 遍历第一种写法

    // const numbers = props.numbers;
    // 新建一个html标签 小写字母开头的标签
    // const listItems = numbers.map((number, index) =>
    //     <ListTempTest key={index} obj={number}/>
    // );
    // return <ul>{listItems}</ul>
    //
    // 第二种写法，JSX 允许在大括号中嵌入任何表达式 但是不能出现var const let关键字
    const numbers = props.numbers;
    return (
        <ul>
            {
                numbers.map((number, index) =>
                    <ListTempTest key={index} obj={number}/>
                )
            }
        </ul>
    )

}
// 导出这个组件 在app.js中接收
export default NumberList