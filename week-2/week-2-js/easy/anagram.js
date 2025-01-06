/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  isAnagramStr1= str1.toLowerCase().split("").sort().join("");
  isAnagramStr2=str2.toLowerCase().split("").sort().join("");
  console.log(isAnagramStr1);
  console.log(isAnagramStr2);
    if(isAnagramStr1===isAnagramStr2) {
      return true;
    }
    return false;
}
const str = "Sanjana"
const sorted = str.toLowerCase().split("").sort().join("");
console.log(sorted);
console.log(isAnagram("sanj", "jans"))
// console.log()

module.exports = isAnagram;
