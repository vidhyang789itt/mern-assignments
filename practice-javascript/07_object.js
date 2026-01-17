
//using symbol as key
const mySym = Symbol("key1")


const jsUser = {
    name : "Hitesh",   //js actually takes the key as strign only
    age : 20,
    // mySym : "mykey1", //it actually doesnt take the declared symbol
    email : "hello@gmail.com",
    location : "Jaipur",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"],
    [mySym] : "mykey1"
}


//access
// console.log(jsUser.email);
// console.log(jsUser["email"]); //this way is better as we can access every key from it 
// console.log(jsUser[mySym]);
// console.log(jsUser);


// Object.freeze(jsUser) //it actually freeze the changes to jsUser it not give error just do not change anything

// jsUser.greetings = function(){
//     console.log("Hello JS User");
// }

// console.log(jsUser.greetings());

jsUser.greetingsTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

// console.log(jsUser.greetingsTwo());

// cosnt tinderUser = new Object();
const tinderUser = {}
tinderUser.id = "123"
tinderUser.name = "sammy"

// console.log(Object.keys(tinderUser)) //actually prints all in array

const {name} = tinderUser;
console.log(name);