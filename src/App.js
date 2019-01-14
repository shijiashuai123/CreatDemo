import React  from 'react';
import './App.css';
// import Side from './layout/index'
import Login from './login/index'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        return (
              <div className="App">
                    <Login />
                    {/*<Side />*/}
              </div>
        );
    }
}
export default App;
