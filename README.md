# react-bootcamp-fa18

# How to get user input
![Test Image 1](images/lifecycle.png)


Currently, the only methdo we are using is the render method, but theyre a lot more methods build into a component. 

You can think of it as three stages:

Initialization: This is when the component sets up its state and inital props.

Mounting: The component is prepared with its basic needs, so its ready to mount in the browser DOM. There are two lifecycle methods you can access at this stage: 
* componentWillMount which will execute right beofre the react component is mounted. This is used for initializing more states and props. 

* Render, which mounst the component onto the browser. 

* Component did Mount, which is right after the 