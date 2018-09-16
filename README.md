# react-bootcamp-fa18

## Requirements
* node version 8.x
* npm version 5.x

Install node and npm [here](https://nodejs.org/en/download/).

Check if you have the correct versions by running the following commands in your terminal:
```
node -v
```
```
npm -v
```

## Setup

### What is npm

Npm stands for node package managers, meaning it helps you download and import dependencies. It does this trhough a file called package.json.

### What is package.json? 

This defines all the metadata for the project, meaning it keeps track of all your dependencies and scripts. You can autogenerate one my typing ```npm init``` in command line, and answering all the questionsx

### How do you add a startup script?
The file ```package.json``` is written in a json format, meaning there are keys and values. Look at this segment from package.json

```
...
 "scripts": {
    "start": "node src/index.js"
  },
...
```
The tag scripts defines all the scripts that are availible. Every key value pair inside defines the command that will actually be run, and the associated alias for it. 

For instance, if I type into command line...
```
npm run start
```
It will look at the package.json file, find the associated command for that script, and execute it, which in this case is ```node src/index.js```

### What is Javascript?

### Print Statements
In javascript, print is just console.log, which is a function which will print the arguments.
```Javascript
    console.log("Hello World");
```

### Variables
Const implies that a variable is immutable, meaning we can never change it again. Let on the other hand means we can change the value of that variable. 

```Javascript
const x = 10; 
x = 2 // not okay

let y = 6;
y = 7; //okay
```
You can assign strings, numbers, booleans, arrays, and objects to any value. 

```Javascript
let name = "aria"
let age = 20;
let wantsBoba = true;
```

Arrays can have values of any type and can be manipulated. Here are a couple examples, but there is a lot more that you can do. 
```Javascript
let favoriteThings = ['latea', 28, true]
let backwards = favoriteThings.reverse()
let sliced = favoriteThings.slice(0,2)
favoriteThings.pop()
favoriteThings.pop()
favoriteThings.push("Kung Fu Tea")
```

### If/Case Statements

If stamenets will execute one option or the other depending on the condition 
```Javascript
let door = "Knock knock";
if (door === "Knock knock") {
    console.log("Who's there")
} else {
    console.log("Awkward silence")
}
```

To compare to values, you use "===" to see if they are the same or "!==" to see if they are different. When you use 2 equals instead of 3, you have to deal with javascripts equality table. See https://dorey.github.io/JavaScript-Equality-Table/. 


Switch statements evaulate multiple possibilities of the value and do different things in each case. 
```Javascript
let value = 2;
switch (value) {
    case 1: 
        console.log("One");
        break;
    case 2: 
        console.log("Two");
        break;
    default: 
        console.log("None");
}

```

### Loops

For loops will start at a value and iterate through a range. 

```Javascript 
let introCourses = [125, 173, 225, 233, 241, 374]
for (let i = 0; i < introCourses.length; i++) { 
  console.log(introCourses[i])
}
```


```Javascript

let student = {
  courses = []
}
let introCourses = [125, 173, 225, 233, 241, 374]

for (let i = 0; i < introCourses.length; i++) { 
    student.courses.push(introCourses[i])
}
console.log(student)
```



### JSON

JSON is a way of storing different types of information in an object in javascript. 

```Javascript
let student = {
  name: "Aria",
  age: 20, 
  favoriteBobaPlaces: ["latea", "teamoji", "kung fu tea"],
  friends: [
    {
      name: "Roy", 
      age: 19
    }
  ]
}

console.log(student.name)
console.log(student.friends[0].name)
```

## Functions

This provides a clean way of dividing your code into simple reusable parts. 

```Javascript
function sayHello(name) {
  return "Hello " + name;
}

sayHello("Aria")
sayHello("Roy")
```

### Translating Elements: Maps, Reduce, and Filters

Maps take in an array of elements and transform it to another array of elements. 

The easiest way to understand is looking through an example. 

In the example below we want to multiply every number in the array by 2. A map statement allows us to do this is a much more readable fashion. 
```Javascript
// With mapping
let array = [1,2,3,4,5]
let newArray  = []
for(var i = 0; i < array.length; i++) {
    newArray.push(array[i] * 2);
}
// With mapping
let mappedArray = array.map(elem => elem * 2)
```

Filters on the other hand take an array of element and return another array of elements of values that are all true for a certain condition. For instance, 

```Javascript
// Without filtering
let array = [1,2,3,4,5]
let newArray  = []
for(var i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
      newArray.push(array[i]);
    }
}

// With filtering
let mappedArray =  array.filter(elem => elem % 3 === 0)
```

Reduce functions allow you to take an array and returns a single value. It evaulates each element on the array one at  a time, using the last value to get a new value. 

```Javascript
// Without reduce
let array = [1,2,3,4,5]
let sum = 0;
for(var i = 0; i < array.length; i++) {
  sum += array[i]
}

// With reduce
let reducedSum = array.reduce((prev, elem) => elem + prev)


```










