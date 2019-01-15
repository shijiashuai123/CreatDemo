import React  from 'react';
import './App.css';
import Side from './layout/index'
import Login from './login/index'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            token: false
        }
    }
    render() {
        var ele = null;
        this.state.token ? ele = <Login /> : ele = <Side />
        return (
              <div className="App">
                  {ele}
              </div>
        );
    }
}
export default App;
