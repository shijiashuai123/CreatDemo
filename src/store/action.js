// 创建action action也是函数
export function setTest1(data) {
  return (dispatch, getState) => {
    dispatch({type: 'SET_TEST1', data: data})
  }
}

export function setTest2List(data) {
  return (dispatch, getState) => {
    dispatch({type: 'SET_TEST2', data: data})
  }
}

export function setToken(data) {
  return (dispatch, getState) => {
    dispatch({type: 'SET_TOKEN', data: data})
  }
}