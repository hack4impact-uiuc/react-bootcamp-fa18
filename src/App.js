import React, { Component } from "react";

import ToDoListItem from './components/toDoListItem'

class App extends Component {
  state = {
    todoListTitle: "My Todo List",
    todos: ["Walk to latea", "See Megha at latea", "Get boba"]
  };

  render() {
    return (
      <div>
        <h1>{this.state.todoListTitle}</h1>
        {this.state.todos.map(x => (
          <ToDoListItem todo={x}></ToDoListItem>
        ))}
      </div>
    );
  }
}

export default App;
