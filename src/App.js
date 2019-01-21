import React  from 'react';
import './App.css';
import Side from './layout/index'
// import Login from './login/index'
import Login1 from './login1/index'
import { connect } from 'react-redux' // connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            token: false
        }
    }
    componentDidMount() {
        // redux中的token做登录验证
        console.log(this.props.token)
    }
    render() {
        var ele = null;
        this.props.token ? ele = <Side /> : ele = <Login1 />
        return (
              <div className="App">
                  {ele}
              </div>
        );
    }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    token: state.token
  }
}
export default connect(mapStateToProps)(App)

