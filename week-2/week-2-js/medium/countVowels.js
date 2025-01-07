/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const strArr = str.toLowerCase().split("");
    let cnt=0;
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for(let i=0;i<vowels.length;i++) {
      for(let j=0;j<strArr.length;j++) {
        if(vowels[i]==strArr[j]) {
          cnt++;
        }
      }
    }
    return cnt;
}

const str= "Sanjana";
// const splitted = str.toLowerCase();
console.log(countVowels(str));
module.exports = countVowels;