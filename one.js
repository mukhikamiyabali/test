//  for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
}




for (let i = 1; i <= 10; i++) {
//    console.log(`Outer loop value : ${i}`);
   for (let j = 1; j <= 10; j++) {
    // console.log(`Inner Loop Value ${j} and  Outer loop value ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j );
   }
    
}


let myarray = ["mukhi", "kamiyabali", "mohammad"]
// console.log(myarray.length);
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
}


// ----------*------------*------------*----------


//   break  and  continue


for (let sum = 1; sum <= 20; sum++) {
    if (sum == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`this is my sum ${sum}`);
    
}

