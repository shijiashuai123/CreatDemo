//管理数据的默认值
export default {
  test1: '这是redux里的测试1',
  test2List: [
    {id: 1, name: '第一个数据'},
    {id: 2, name: '第二个数据'},
    {id: 3, name: '第三个数据'},
  ],
  token: localStorage.getItem('token')
}