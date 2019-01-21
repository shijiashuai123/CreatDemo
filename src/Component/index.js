import React, {Component} from 'react';
import {connect} from 'react-redux'

class TestCom extends Component {
  render() {
    let ele = null
    this.props.token ? ele = <p>这是token<span style={{color: "red"}}>{this.props.token}</span></p> : ele = <p>没有token</p>
    console.log(this.props)
    return (
      <div>
        {ele}
        <p>{this.props.test1}</p>
        <ul>
          {
            this.props.test2List.map((item, index) =>
              <li key={index}>{item.name}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    test1: state.test1,
    test2List: state.test2List
  }
}
export default connect(mapStateToProps)(TestCom)

