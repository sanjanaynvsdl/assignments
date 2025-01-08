/*
## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.
For example, if the file input was
```
hello     world    my    name   is       raman
```
After the program runs, the output should be
```
hello world my name is raman
```
*/

const fs = require('fs')
fs.readFile('100xdevs.txt', 'utf-8', (err,data)=> {
    if(err) {
        console.log(err);
    } else {
        const TrimmedData = data.split(' ').filter((word)=> word).join(' ');
        fs.writeFile('100xdevs.txt', TrimmedData, (err)=> {
            if(err) {
                console.log(err);
            } else {
                console.log('Successfully Written to the file after trimming')
            }
        })
    }
})

const str = "hello     world    my    name   is       raman";
const TrimmedStr = str.split(' ').filter((word)=> word).join(' ')
console.log(TrimmedStr);


//That kind of satisfaction after writting this code by my own and googling things instead of asking the gpt
//Best feelingg  mannnn!

/* Question-2
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 
 - HH:MM::SS (Eg. 13:45:23)
 - HH:MM::SS AM/PM (Eg 01:45:23 PM) 
*/
// console.log(date.toLocaleTimeString());

let cnt=0;
function counter() {
    const date = new Date();
    cnt++;
    console.log(cnt+ " At time : "+ date.toLocaleTimeString());
}

setInterval(counter,1000);