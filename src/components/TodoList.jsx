import React from "react"

export class TodoList extends React.Component {
    state = {
        items: ["exist", "eat", "dream", "sunbath"],
        newTodo: "",
    }
    addItem = () => {
        this.setState(state => ({
            items: [...state.items, state.newTodo],
        }))
        this.setState({
            newTodo: "",
        })
    }
    reset = () => {
        this.setState({
            items: []
        })
    }
    render() {
        return <div>
            <input type="text" name="newTodo" value={this.state.newTodo} onChange={(event) => {
                this.setState({ newTodo: event.target.value})
            }} />
            <button onClick={this.addItem}>Add</button>
            <button onClick={this.reset}>Reset</button>
            <ul>
                {this.state.items.map((item) => <li>{item}</li>)}
            </ul>
        </div>
    }
}