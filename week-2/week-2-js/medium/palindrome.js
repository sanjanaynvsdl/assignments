/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function palindromee(str) {
  const currStr = str.replace(/[\s!?,.]+/g, "").toLowerCase();
  let s=0;
  let e=currStr.length-1;
  console.log(currStr);
  while(s<e) {
    if(currStr[s]!=currStr[e]) {
      return false;
    }
    s++;
    e--;
  }
  return true;
}


//This works fine, But the other approach to write this is to check if it a alphanumeric 
function isPalindrome(str) {
  const isAlphanumeric = (char)=> /[a-z0-9]/i.test(char);
  const currStr = str.toLowerCase();
  let s=0;
  let e=str.length-1;
  while(s<e) {
    while(s<e && !isAlphanumeric(currStr[s])) s++;
    while(s<e && !isAlphanumeric(currStr[e])) e--;

    if(currStr[s]!=currStr[e]) {
      return false;
    }
    s++;
    e--;
  }
  return true;
}
const str = "HI i'm a good girl"
console.log(isPalindrome(str))

module.exports = isPalindrome;
