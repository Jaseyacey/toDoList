import React, { Component } from "react";
import "./ToDoList.css";
import ToDoItems from "./ToDoItems";

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);        
    }

    addItem(e) {
        var itemArray = this.state.items; 

        if (this._inputElement.value !== "") {
            itemArray.unshift (
                {
                    text: this._inputElement.value,
                    key: Date.now()
                }
            );
            this.setState({
                items: itemArray
            });
        }

        render() {
            return(
                <div className="toDoListMain">
                    <div className="header">
                        <form onSubmit = {this.addItem}>
                            input ref={(a) => this._inputElement = a}
                            placeholder="enter task"
                        </form>
                    </div>

                <ToDoItems entries={this.state.items}
                    delete={this.deleteItem} />
                </div>
            )
        }
    }
}

export default ToDoList; 