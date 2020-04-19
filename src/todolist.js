import React, { Component } from 'react';

class ToDoList extends Component {
    render() {
        return (
            <div className="ToDoListMain">
                <div className ="header">
                    <form>
                        <input placeholder="Enter Task" />
                        <button type = "submit"> Add </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ToDoList; 