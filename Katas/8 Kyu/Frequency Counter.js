/*
Write a function called sameFrequency. Given two positive integers,
find out if the two numbers have the same frequency of digits.
Sample input:
sameFrequency(182,281) //true
sameFrequency(34,14) //false
sameFrequency(3589578,5879385) //true
sameFrequency(22,222) //false

*/

function sameFrequency(n1, n2){
    let num1str = n1.toString();
    let num2str = n2.toString();
    
    if(n1.length !== n2.length) return false
    
  // good luck. Add any arguments you deem necessary.
  let obj1 = {};
  let obj2 = {};
  for(let num of num1str){
      if(obj1[num] == 1){
          obj1[num]++
      }else{
          obj1[num] = 1;
      }
  }
  for(let num of num2str){
      if(obj2[num] == 1){
          obj2[num]++
      }else{
          obj2[num] = 1;
      }
  }
  for(let key in obj1){
      if(obj1[key] !== obj2[key]) return false;
  }
  return true
}
