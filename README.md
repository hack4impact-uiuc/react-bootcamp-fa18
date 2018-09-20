# react-bootcamp-fa18


## Where do you actually use lifecycle methods?

Sometimes, you dont have all the data immediately and need to wait for it, but you dont want the page to not load for the user. For instance, if you are making a request to an API for some data. 


## Promises

Before we jump into making the request, we should start with with promises. A promise is a way in which you san say that you will get this data at some point even if you dont have it when the code is run. When you get the data, you can execute the rest of the code, but in the mean time you have to wait for the data. 

This is going to have to look something like the example below, were you have a time out for 1000 milliseconds. When it resolves it will print with the value foo. If you call ```.then```, it assumes you habe the value from that promise and prints it out. 

```Javascript 
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() { 
    resolve('foo');
  }, 300);
});

promise1.then(function(value) { 
  console.log(value);
  // expected output: "foo"
});
console.log(promise1);
```

## Async and await 

This is just simply a nicer syntax to do the same thing, where you can define a function as async, and then await on every part. So instead it would look something like thix example below, where you can await on the response for one, and then use it for the next steps.   

```Javascript
import fetch from 'node-fetch'

async componentDidMount() {
    const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
    const json = await response.json();
    this.setState({ data: json });
  }

```

## Making the request

When the component mounts, you can make the request, and when its has the information, it will show it. 

```Javascript
import React, { Component } from "react";
import fetch from 'node-fetch'

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
````

