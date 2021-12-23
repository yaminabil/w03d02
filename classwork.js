/* JavaScript Datatypes
 * Booleans
 * Strings
 * Objects
 * Numbers
 * Null
 * Undefined
 * Symbol
 */

// Booleans
let userHasQuit = false;
/*
Example of when we could use a boolean to continuously do something
for an unspecified amount of time

while(!userHasQuit){
 const selection = window.prompt('do you want to quit?', 'no')
 if(selection.toLowerCase().trim() === 'yes'){
    userHasQuit = true
  }
} */

console .log ("hello world its so great");
  const str = "hello world its so great ";
  console.log (str.split(" "));
  const words =str.split ('');
  console.log(words);


  const arr = [1,2,3];
  arr.reverse();
  arr.forEach ( (num) => {
   console.log (num)
  })


  // functions  
    const reverseString = (str)  => {
      return str.split('').reverse().join('')

    }
    console.log(reverseString("bilal"));


    //max of three  

    const maxOfThree = (num1 ,num2,num3 )    =>   {
      const arr =[num1,num2,num3];
      arr.sort ( (a,b) =>{
        return b-a
      })
      return arr[0]
    }

    console.log (maxOfThree (1,2,3));


  