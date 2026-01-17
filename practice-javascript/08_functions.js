function addTwoNumber(num1, num2){
    let result = num1 + num2;
    return result;
}

const result = addTwoNumber(3, 5);
console.log("Result: ",result);

function calculateCartPrice(val1, val2, ...num1){ //it actually then take all the other arguments as array
    return num1;
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is `)
}

console.log(calculateCartPrice(200,400,500,2000))

const addTwo = function(num){ //in this type of fucntion we actually can not call it before tis declarration while in normal ew do
    return num+2
}

addTwo(3);

const chai = ()=>{
    let username = "hitesh"
    console.log(this);
}