// console.log("Hello World");

const x = 10; 
// x = 2 // not okay

let y = 6;
y = 7; //okay

let name = "aria"
let age = 20;
let wantsBoba = true;

let favoriteThings = [ 28, true, 'latea']
// console.log(favoriteThings)

let backwards = favoriteThings.reverse()
// console.log(backwards)

let sliced = favoriteThings.slice(0,2)
// console.log(sliced)

favoriteThings.pop()
// console.log(favoriteThings)

favoriteThings.pop()
// console.log(favoriteThings)

favoriteThings.push("Kung Fu Tea")

// console.log("Favorite Things:   " + favoriteThings)
// console.log("Backwards:         " + backwards)
// console.log("Sliced:            " + sliced)


let door = "Knock knock";
if (door === "Knock knock") {
    // console.log("Who's there")
} else {
    // console.log("Awkward silence")
}

let value = 2;
switch (value) {
    case 1: 
        // console.log("One");
        break;
    case 2: 
        // console.log("Two");
        break;
    default: 
        // console.log("None");
}


let introCourses = [125, 173, 225, 233, 241, 374]
for (let i = 0; i < introCourses.length; i++) { 
//   console.log(introCourses[i])
}


let student = {
    name: "Aria",
    age: 20, 
    favoriteBobaPlaces: ["latea", "teamoji", "kung fu tea"],
    friends: [
      {
        name: "Alpri", 
        age: 19
      }
    ]
  }
  
// console.log(student.name)
// console.log(student.friends[0].name)


function sayHello(name) {
    return "Hello " + name;
  }
  
// console.log(sayHello("Aria"))
// console.log(sayHello("Alpri"))

let array = [1,2,3,4,5]
let newArray  = []
for(var i = 0; i < array.length; i++) {
    newArray.push(array[i] * 2);
}
// console.log(newArray)

let mappedArray = array.map(elem => elem * 2)
// console.log(mappedArray)


array = [1,2,3,4,5,6]
newArray  = []
for(var i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
      newArray.push(array[i]);
    }
}
// console.log(newArray)

mappedArray = array.filter(elem => elem % 3 === 0)
// console.log(mappedArray)

array = [1,2,3,4,5]
let sum = 0;
for(var i = 0; i < array.length; i++) {
  sum += array[i]
}
// console.log(sum)

let reducedSum = array.reduce((prev, elem) => elem + prev)
// console.log(reducedSum)