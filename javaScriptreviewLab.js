  // section A   Q + A  *********************************************
// 1. How do we assign a value to a variable? A. With the assignment operator equal
let z =3 ;

//2. How do we change the value of a variable . by  assigning the new value to it ...

z=4;//assigning the new value 

//3.How do we assign an existing variable to a new variable 
 
let newvariable =5 ;

//4.Remind me, what are declare, assign, and define?
//declare
let x=1 ;
const y=2;


//assign  : give the varible a name like we did x and y 
//define  : give the variables a value like 1 and 2 


// 5.What is pseudocoding and why should you do it?
/* pseudocoding   is the logic behind the code and it doesn't have to be in any coding language 
it gives an idea how you solve the problem */

// 6. what percentage of time should be spent about how you're going to solve a problem vs actually typing in code to solve it 
/*i would spend more time thinking about how to solve the algorithmic problem with going throu all the 
posibilties than typing it in any coding language but also while your typing you can 
change some ideas so my answer would be 60 % thinking about the logic 40 % typing it */ 
//******************************************************************** */


//  B section  Strings   *************************************** //

// 1 - create  a variable called firstVariable 
let firstVariable = "";
console.log(firstVariable);

// 2- assign the value of the string " hello world "
firstVariable = "Hello  World";

// 3 - change the value of this variable to some number 
firstVariable = 4;

// 4 - store the value of firstVariable in new variable called secondVariable 
let secondVariable = firstVariable ;

// 5 - change the value of secondVariable to any string 
secondVariable = "string ";

// 6 what is the value of firstVariable  (it's 4 let's see )
console.log (firstVariable);

/* 7 - create a variable called yourName and set it eqaul to your name as a string .then 
write an expression that takes the string "Hello, my name is " and the variable 
yourName so that it returns a new string with them concatenated */

let yourName = "Bilal";
let expression = "Hello , my name is " + yourName ;
console.log (expression);

//***************************************************** */

// section C  booleans **********************************************

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "kevin";

console.log (a < b);
console.log (c > d);
console.log ("name" == "name");
//for the next two , use only && or || 
console.log (true || false);
console.log (false && false && false && false && false || true) ;
console.log (false == false );
console.log (e=== "kevin");
console.log ("next");
console.log (a + b === c );
console.log (a * a === d);
console.log (48 == "48");

//**************************************************** */

// section d farm **************************************************//

// 1 - Declare a variable animal . Set it to either "cow" or something else 

let animal = "Dog";

// 2 - Write code that will print out "moooo" if the it is equal to cow 

if (animal === "cow") { 
    console.log ("mooooo");
} 

// 3 - Change the code so that the variable animal is anything other than a cow , it will
// print "Hey!You're not a cow"

if (animal !== "cow") {
    console.log ("Hey!You're not a cow");
}

// 4 commit 
/*  1 -  git status
    2 - git add -A
    3 - git commit -m "update file javaScriptreviewlab.js"
    4 - git push 
    */





