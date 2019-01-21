// Test.jsx
import React, { Component } from 'react'

// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'

// 引入action
import { setTest1, setTest2List } from '../store/action.js'
// 数字转换文字
import {numTurnWord} from '../assets/util'
import './index.scss'
class TestRedux extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '这是测试组件',
      list: []
    }
  }
  componentDidMount () {
    // setTest1 action
    // setTest1('新的标题')
    this.setState({
      // list: this.props.test2List
    })
  }
  changeTest1Btn() {
    let num = this.props.test1
    typeof num === 'string' ? num = 1 : num++
    this.props.setTest1(num)
  }
  clickSetNull() {
    this.props.setTest1(1)
  }
  clickAddItemBtn() {
    // let arr = [
    //   {id: 1, name: '第一个数据'},
    //   {id: 2, name: '第二个数据'},
    //   {id: 3, name: '第三个数据'},
    //   {id: 4, name: '第四个数据'}
    // ]
    var arr = this.props.test2List
    let obj = {}
    console.log(this.props.test2List.length)
    if (!this.props.test2List.length) {
      obj.id = 1
      obj.name = "第" + numTurnWord(obj.id) + '个数据'
      arr.push(obj)
      console.log(arr)
      this.props.setTest2List(arr)
    } else {
      var index = this.props.test2List.length + 1
      obj.id = index
      obj.name = "第" + numTurnWord(obj.id) + '个数据'
      arr.push(obj)
      this.props.setTest2List(arr)
    }
  }
  clickDelItemBtn() {
    if (this.props.test2List.length) {
      var arr = this.props.test2List
      arr.pop()
      this.props.setTest2List(arr)
    }
  }
  clickDelAllItemBtn() {
    this.props.setTest2List([])
  }
  render () {
    // 从props中解构store
    let { test1 } = this.props
    console.log(this.props)
    // 使用store
    let ele = null
    typeof test1 === 'string' ? ele = <h1>{test1}</h1> : ele = <h1>点击了{test1}次</h1>
    return (
      <div>
        <button onClick={this.changeTest1Btn.bind(this)}>点击改变store的数据</button>
        <button onClick={this.clickSetNull.bind(this)}>重置</button>
        {ele}
        <p>{this.props.name}</p>
        <button onClick={this.clickAddItemBtn.bind(this)}>点击添加一个</button>
        <button onClick={this.clickDelItemBtn.bind(this)}>点击删除一个</button>
        <button onClick={this.clickDelAllItemBtn.bind(this)}>点击清空数组</button>
        <ul>
          {
            this.props.test2List.map(( item, index) =>
              <li key={index}><span>{item.id}:</span>{item.name}</li>
            )
          }
        </ul>
        <p className="sass_test">sassBox
          <span className="sass_item">sassItem</span>
        </p>
        <ul>
          {/*{*/}
          {/*this.state.list.map((item, index) =>*/}
          {/*<li key={index}>*/}
          {/*<span>id:{item.id}</span><span>{item.name}</span>item.name*/}
          {/*</li>*/}
          {/*)*/}
          {/*}*/}
        </ul>
      </div>
    )
  }
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
  console.log(state)
  return {
    test1: state.test1,
    test2List: state.test2List
  }
}
// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setTest1 (data) {
      // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
      dispatch(setTest1(data))
      // 执行setPageTitle会返回一个函数
      // 这正是redux-thunk的所用之处:异步action
      // 上行代码相当于
      /*dispatch((dispatch, getState) => {
          dispatch({ type: 'SET_PAGE_TITLE', data: data })
      )*/
    },
    setTest2List (data) {
      console.log(data)
      dispatch(setTest2List(data))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TestRedux)


// 练习循环test2List数组
// 父组件传递props test组件来接收，查看redux和父组件props的数据