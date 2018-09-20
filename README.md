# react-bootcamp-fa18

## Introduction to React: What is it?
Developed by Facebook, React is an efficient and flexible Javascript library primarily
used for building user interfaces. One of its most powerful features and the source of
React's speed involves the virtual DOM. In addition, the library supports custom elements
called Components, which allows for more modular, reusable code.

### Why is React fast?
Normally, web applications would directly build or modify the document object model,
which utilizes expensive operations. However, React builds an additional layer between
the application and the DOM, called the Virtual Document Object Model, or virtual DOM.
This layer increases efficiency by constructing/applying changes to the virtual DOM and then
calculating the minimal difference between the virtual and real document object models, finally
updating the actual DOM in as few steps as possible.

### What is JSX?
