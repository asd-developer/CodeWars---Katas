/*
Complete the solution so that it reverses all of the words within the string passed in.

Example:

reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"
*/

//MY SOLUTION
function reverseWords(str){
    const a = str.split(" ")
    a.reverse()
    let b = a.join(" ")
    return b; // reverse those words
}

//BEST PRACTICE
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }