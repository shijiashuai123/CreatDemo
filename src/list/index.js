import React, { Component } from 'react';
import './index.css'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listName: '列表测试',
        };
    }
    render() {
        return(
            <div className="List_Box">
                <p className="List_Tit">{this.state.listName}</p>
                <p className="list_name">{this.props.name}</p>
            </div>
        )
    }
}

export default List