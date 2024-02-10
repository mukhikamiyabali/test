const name = "hitesh"
const number = 50
const number2 = 60


const num3 = number + number


// console.log(name + number + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${num3}`);

const gameName = new String('hitesh-hc-com')

console.log(gameName[1]);   // he take a letar in this name
console.log(gameName);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));