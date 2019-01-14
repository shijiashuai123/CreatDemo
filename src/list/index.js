import React, { Component } from 'react';
import './index.css'


const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((item, index) =>
    <li key={index}>{item}</li>
);
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listName: '列表测试',
            number: [1, 2, 3, 4, 5]
        };
    }
    render() {
        return(
            <div className="List_Box">
                <p className="List_Tit">{this.state.listName}</p>
                <p className="list_name">{this.state.listName}</p>
                <p>{this.state.number}</p>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default List