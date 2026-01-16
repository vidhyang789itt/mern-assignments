console.log("Hitesh")
const accountId = 144554
let accountEmail = "vidhyang387@gmail.com"    //this has scopes 
var accountPassword = "12345"   //there is no scope end its everywhere
accountCity = "Jaipur"
let accountState

// accountId = 34252 // not allowed

accountEmail = "sdfs@gmail"
accountPassword = "21212121"
accountCity = "Bengluru"

console.log(accountId)
console.table([accountId , accountEmail , accountPassword , accountCity , accountState]) //accountState is undefined


/*
prefer not to use var 
because of issue in block scope and functional scope
*/