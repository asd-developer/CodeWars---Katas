/*
Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

  sumStr("4", "5")    // should output "9"
  sumStr("34", "5")   // should output "39"

If either input is an empty string, consider it as zero.
*/

//MY SOLUTION

function sumStr(a,b) {
    console.log("a:",a,"b:",b)
    if(a === ""){
      a = "0"
    }
    if(b === ""){
      b = "0"
    }
    return (parseInt(a) + parseInt(b)).toString()
  }

//BEST PRACTICE

function sumStr(a,b) {
    return String(Number(a)+Number(b));
}