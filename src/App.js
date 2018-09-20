import React, { Component } from "react";

import ToDoListItem from "./components/toDoListItem";

class App extends Component {
  state = {
    todoListTitle: "My Todo List",
    todos: ["Walk to latea", "See Megha at latea", "Get boba"],
    newTodo: ""
  };

  componentDidMount() {
    console.log("componentDidMount")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  handleChange = event => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = event => {
    this.setState({
      todos: [...this.state.todos, this.state.newTodo]
    });
    this.setState({
      newTodo : ""
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.todoListTitle}</h1>
        {console.log('test' + this.state.test ? "hi2" : "hi" )}
        {this.state.todos.map(x => (
          <ToDoListItem todo={this.state.test ? "j" : x} key={x} />
        ))}
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}> + </button>
      </div>
    );
  }
}

export default App;
