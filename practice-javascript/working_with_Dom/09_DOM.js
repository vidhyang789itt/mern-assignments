// const title = document.getElementById('title');
// title.style.backgroundColor = 'green'


// title.textContent //it shows all text whichever there with including other span
// title.innerText //it is similar but shows only text not span


// document.querySelector('h1') //gets only first element with this tag

// const myul = document.querySelector('ul')
// const turnGreen = myul.querySelector('li');
// turnGreen.style.backgroundColor = "green"


// const tempClassList = document.getElementsByClassName('Hello'); //it returns all elelment but in diff structure so we first convert it in array
// const classArray = Array.from(tempClassList)

// const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children);
// parent.children[1].style.color = "orange"

// const dayone = document.querySelector('.day')
// console.log(dayone);
// console.log(dayone.parentElement);
// console.log(dayone.nextElementSibling);

// console.log("NODES : ", parent.childNodes);

// const div = document.createElement('div')
// console.log(div);
// div.className = "main"
// div.id = Math.round(Math.random() * 10 + 1)
// div.setAttribute("title", "generated title")
// div.style.backgroundColor = "green"
// div.style.padding = "12px"

// //one way to add text
// div.innerText = "Chai aur Code"

// //another way to add text
// const addText = document.createTextNode("Chai Aur Code")
// div.appendChild(addText)

// // to add in body
// document.body.appendChild(div);


//edit or remove elements
function addLangugae(langName){ //it actually traverse all child and add in last so its less optimized
    const li = document.createElement('li')
    li.innerText = `${langName}`
    document.querySelector('.language').appendChild(li);
}

addLangugae("python")
addLangugae("C++")


//optimized way
function addOptLanguage(langName){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li);
}

document.querySelector("li:nth-child(2)")