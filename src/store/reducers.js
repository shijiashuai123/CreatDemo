// 创建reducer
// 工具函数，用于组织多个reducer，并返回reducer集合
import { combineReducers } from 'redux'
import defaultState from './state.js'

// 一个reducer就是一个函数
function test1 (state = defaultState.test1, action) {
  // 不同的action有不同的处理逻辑
  switch (action.type) {
    case 'SET_TEST1':
      return action.data
    default:
      return state
  }
}
function test2List (state = defaultState.test2List, action) {
  // 不同的action有不同的处理逻辑
  switch (action.type) {
    case 'SET_TEST2':
      return action.data
    default:
      return state
  }
}
function token (state = defaultState.token, action) {
  // 不同的action有不同的处理逻辑
  switch (action.type) {
    case 'SET_TOKEN':
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  test1,
  test2List,
  token
})