// applyMiddleware: redux通过该函数来使用中间件
// createStore: 用于创建store实例
import { applyMiddleware, createStore } from 'redux'

// 中间件，作用：如果不使用该中间件，当我们dispatch一个action时，需要给dispatch函数传入action对象；但如果我们使用了这个中间件，那么就可以传入一个函数，这个函数接收两个参数:dispatch和getState。这个dispatch可以在将来的异步请求完成后使用，对于异步action很有用
import thunk from 'redux-thunk'
import reducers from './reducers.js'
let store = createStore(
  reducers,
  applyMiddleware(thunk)
)

export default store



// redux
// 使用说明：
// store: 对象，用来让外界获取或者修改Redux的数据  const store = createStore(reducer)
// action: 一般是对象的形式，其中有一个type字段必须的描述要干什么 {type: '加'}
// reducer: （store创建的对象）
// store.dispatch(): 触发action,一个参数就是action（更新redux中的数据）
// store.getState() 获取redux中的数据
// store.subscribe(render) 监听redux中的state的变化

// React-redux
// Provider 组件 一般将顶层组件放到Provider组件中，store作为参数放到Provider组件中， 放到顶层组件可以让所有的组件都能访问到Redux的数据
// connect 方法中4个参数，主要用到两个参数的方法 connect(mapStateToProps, mapDispatchToProps)(MyComponent)
//        1、第一个： mapStateToProps 把Redux中的数据映射到React中的Props中， react想把redux中的数据拿过来使用
//               const mapStateToProps = (state) => {
//                 return {
//                   gun: state.gunOfErlian
//                 }
//               }
//               渲染的时候直接使用 this.props.gun
//        2、第二个：mapDispatchToProps 把各种dispatch也变成了props让你可以使用
//                const mapDispatchToProps = (dispatch) => {
//                   return {
//                     onClick: () => {
//                       dispatch({
//                         type: '请求增援',
//                　　　　 gun : 100
//                       });
//                     }
//                   };
//                 }
//                点击onClick之后组件的数据会更新，并且不需要去 store.subscribe(render)去手动更新