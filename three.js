// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"

for (let greet = 0; greet < greetings.length; greet++) {
    if (greetings[greet] == "w") {
        // console.log("when 'w' will Found");
        break
        
    }
    console.log(`w will Found ${greetings[greet]}`);
}

// ----------*----------*-------------*


const greetings1 = "hello world!"

for (let letter = 0; letter < greetings1.length; letter++) {
    if (greetings1[letter] == 'w') {
        console.log("when 'w' will Found , the loop will stop.");
        break;
    }
    console.log(greetings1[letter]);
}