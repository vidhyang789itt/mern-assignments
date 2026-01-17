const myarr = [1, 2, 3, 4, 5]

console.log(myarr[0]);  // we do a copy here is do shallow copy means two things then point to same

const myarr2 = new Array(1, 2, 3, 4) 

//arrays contains myltiple fucntions like length


myarr.push(6)
myarr.pop()
myarr.unshift(0);  //inserts in start and shifts all values
myarr.shift(); //left shifts all value and delete 0 index value

const newarr = myarr.join(); //converts all the array values to one string


console.log("A ", myarr);
const myn1 = myarr.slice(1, 3);  //takes value from index 1 2 not include 3
console.log(myn1);
console.log("B ", myarr);
const myn2 = myarr.splice(1,3); // it not only includes 3 but also delete 1 2 3 form original array
console.log(myn2);
console.log("C ", myarr);

const marvel_heros = ["thor", "Ironman", "sprider"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros); //in this actually there have been created an array into an array that means array can take whatever data types

const merged_heros = marvel_heros.concat(dc_heros)
console.log(merged_heros)

const allnewheros = [...marvel_heros, ...dc_heros]; //it actually spread elements that it add in new array

const another_array = [1, 2, 3, [4, 5, 6], 7, [5, [6, 8]]];
const real_another_array = another_array.flat();


console.log(Array.isArray("Hitesh")) //returns whether its an array or not 
console.log(Array.from("Hitesh")) //converts in array and if not possibl it gives empty
console.log(Array.from({name :"Hitesh"})) //interestingly returns empty array

let a = 10;
let b = 10;
let c = 10;

console.log(Array.of(a, b, c));

for (const num of marvel_heros){
    console.log(num );
}

marvel_heros.forEach(function name(val){
    console.log(val);
})

marvel_heros.forEach((item) => {
    console.log(item);
})

const myNums = [1, 2, 3, 4, 5, 6, 7]

const newNums = myNums.filter((num) => num>4)
console.log(newNums); //now it is the array which has elements > 4
const mapped = myNums.map((num) => (num+10));
console.log(mapped);
