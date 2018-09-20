import React, { Component } from "react";
import fetch from 'node-fetch'

import ToDoListItem from "./components/toDoListItem";
import {getAllTodos} from "./utils/api"



class App extends Component {
  
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
    const json = await response.json();
    this.setState({ data: json });
  }

  render() {
    return (
      <div>
        {this.state.data.map(x => (
          <ToDoListItem todo={x.name} key={x.name} />
        ))}
      </div>
    );
  }
}

export default App;
