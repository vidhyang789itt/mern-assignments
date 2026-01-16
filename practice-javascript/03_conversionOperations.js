let score = "33"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)


//"33" => 33
//"33abc" => NaN
//true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)



let someNumber = 33

let stringNumber = String(Number)
console.log(stringNumber)
console.log(typeof stringNumber)



console.log("1" + 2) //fullly converted in strign and ans = 12
console.log(1 + "2") //same
console.log("1" + 2 + 2)  //same ans = 122
console.log(1 + 2 + "2")  //first adition then string ans = 32


console.log("2" === 2) // === this also checks data types

console.log(null > 0); // this gives false
console.log(null == 0); //this gives false
console.log(null >= 0); //this gives true because the comparision operator (< , >) makes the null to 0 thats why is will be true

const heros = ["shaktiman" , "naagraj"];

let muObj = {
    name : "hitesh",
    age : 22
}

const myFunciton = function(){
    console.log("Hello World")
}


// Memory =>
    //Stack(Primitive) , Heap(Non-Primitive)

