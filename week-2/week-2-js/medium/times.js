/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const startTime = Date.now()

    let sum=0;
    for(let i=1;i<=n;i++) {
        sum+=i;
    }
    const endTime = Date.now();
    return endTime-startTime;
}
// console.log(date.getSeconds());
// const date = new Date();

// using this is incorrect
const date = new Date();
const startTime = date.now()
// The Date object does not have a now() method; instead, Date.now() 
// is a static method and should be called directly on the Date class, not on an instance of the Date object.


const secondsToCal100=calculateTime(1000000000);
console.log(secondsToCal100);