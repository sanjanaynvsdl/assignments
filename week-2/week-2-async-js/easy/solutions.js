//1
//We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
//It should go up as time goes by in intervals of 1 second

let cnt=0;
function counter() {
    cnt++;
    console.log(cnt);
}

setInterval(counter,1000);


//2.
//Without using setInterval, try to code a counter in Javascript. 
// There is a hint at the bottom of the file if you get stuck. --using setTimeOut

let cnt2= 0;
function counter2() {
    cnt2++;
    console.log(cnt2);
    setTimeout(counter2, 1000);
}
counter2();

//3.
//Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs')

fs.readFile('100xdevs.txt', 'utf-8', (err,data)=> {
    console.log(data);
});

for(let i=0;i<100;i++) {
    console.log(i);
}

//4.
//## Write to a file
//Using the fs library again, try to write to the contents of a file.
//You can use the fs library to as a black box, the goal is to understand async tasks.

const dataToWrite= "Want to be a 100xdev not 1xdev"

fs.writeFile('100xdevs.txt',dataToWrite,(err)=>{
    if(err) {
        console.log("error in writting to file")
    } else {
        console.log("Successfully written!")
    }
});





