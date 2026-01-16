let myYoutubeName = "vidhyangjain"
let anotherName = myYoutubeName //copy of myYoutubeName is passed
anotherName = "another" //only anotherName changes




let userOne = {
    email : "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne //it is not coping it is actually refrencing to heap memory basically both will refrence to same

userTwo.email = "diff@google.com" //now this changes in both