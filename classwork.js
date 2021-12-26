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

    //class 
     
    class Cat {
      constructor(name, age, cuteness){
          this.name = name;
          this.age = age;
          this.cuteness = cuteness;
          this.legs = 4;
          this.hasClaws = true
      }
      scratch(){
          if(this.age < 2 && this.hasClaws){
              console.log('Your couch is destroyed')
          } else {
              console.log('nothing happens the cat cant scratch')
          }
      }
  }
  
  
  const huey = new Cat('Huey P Kitten', 4, Infinity)
  
  console.log(huey)
  huey.scratch()
  
  class SuperCat extends Cat {
      constructor(name, age, cuteness, superPower){
          super(name, age, cuteness)
          this.superPower = superPower
      }
  }
  
  const patches = new SuperCat('Patches', 9, Infinity, 'flying')
  console.log(patches)
  
  
  class CrazyCatMan {
      constructor(){
          this.felineFriends = []
      }
      adoptCat(catName, age){
          const newFriend = new Cat(catName,age, Infinity)
          this.felineFriends.push(newFriend)
      }
  }
  
  const arthur = new CrazyCatMan()
  
  arthur.adoptCat('patches jr', 0, Infinity - 1)
  
  console.log(arthur)


  //GIT
  //initialize the git repo "git init "
  //check my git status " git status "
  //stage our commit "git add -A"
  //