//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);


const Number = 3456543576654356754n

console.log(typeof Number);




// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = "Helloworld" ;

console.log(typeof heros);
// this is object
console.log(typeof myObj);
// this is object
console.log(typeof myFunction);
// this is string



// https://262.ecma-international.org/5.1/#sec-11.4.3



//   *********************************************


// Stack (primitive) & Heap (non-primitive)

let myyoutubename = "azadar-e-husain"
myyoutubename = "mukhikamiyabli"

const anothername = "khadiyasan"
// anothername = "kamiyabali"


console.log(myyoutubename);
// this is mukhikamiyabli

console.log(anothername);
// this is myyoutubename


let newuser = {
    email : "mukhi123@gmail.com",
    phone : "8108310831",
    city : "xyz"
}

console.log(newuser);
// this is {
//     email : "mukhi123@gmail.com",
//     phone : "8108310831",
//     city : "xyz"
// }

let edituser = newuser

edituser.email = "kamiyabali@gmail.com"

console.log(newuser.email);
// this is kamiyabali@gmail.com

console.log(edituser.email); 
// this is kamiyabali@gmail.com



 