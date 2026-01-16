const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value") //very bad syntax
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("hitesh") // this type of string has many fucntions like length and we can access its each index and more 

// console.log(gameName.substring(1,4))

//functions like .trim .slice .replace() .includes() .split() etc


// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.random); //random does always in range 0-1
// console.log((Math.random*10) + 1)




//Dates
let myDate = new Date();
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toISOString());

let myCustomDate = new Date(2023 , 0 , 23) //moth starts with 0
console.log(myCustomDate.toDateString)


