/*--------------------------*/
//I. Variables & Datatypes -*/
/*--------------------------*/


// section A   Q + A  
//-------------------//

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



//  B section  Strings
//-----------------------//


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





// section C  booleans 
//---------------------//

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





// section D farm 
//------------------//



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





// section E Driver's Ed 
//-------------------------// 



// 1 - Make a variable that holds a person age ; be sematic 

const age = 10 ;

// 2 - write code that will print out "Here are the keys !" if the age 
// is 16 years old or older else print out "Sorry, you're too young"

if (age >= 16) {
    console.log ("Here are the keys!");
} else console.log ("Sorry,you're too young");



/*-------------------*/
/* II. Loops --------*/ 
/*-------------------*/



// section A  the basics 
//---------------------//

// 1 - Write a loop that will print out all the numbers from 0 to 10  , inclusive

for (let i = 0; i <= 10 ;i++) {
    console.log ("number " + i);
}

// 2 - Write a loop that will print out all the numbers from 10 up to including 400 

for (let i = 10; i <= 400 ;i++) {
    console.log ("number " + i );
}

// 3 - write a loop that will print out every third starting number with 
// 12 and going no higher than 4000m
/*
 for ( let i = 12 ; i <=  4000 ; i = i +3 ) {
   console.log (i); 
} */



// section B Get even 
//--------------------//


// 1 - print out numbers that are within the range of 1-100 
// 2 - adjust your code to add a message next to even numbers only says "<-- is an even number "


for ( let i = 1 ;i <= 100 ;i++) {
    if ( i % 2 === 0 ){
        console.log (i + "<-- is an even number") ;
    }
}


// section C give me five 
//--------------------------//



// 1 - for the numbers 0 - 100 print out " i foun a number . high five!"
//if the number is a multiple of five 
// 2 - add to the code from above to print out " i found a number . three is crowd "
// if the number is a multiple of three

for ( let i = 3 ;i <= 100 ;i++) {
    if ( i % 3 === 0 && i % 5 === 0) {
        console .log (" I found a " + i + "." + " <---- is multiple of 3 and 5 ");}
    else if ( i % 5 === 0 ) {
        console.log ("I found a " + i +"." + " Hight five!");
    } else if ( i % 3 === 0 ) {
         console.log("I found a " + i +"." + " three is a crowd" )
    } 
    
}

//section D savings account 
//----------------------------//



// 1 - Write a code that save the sum of all the numbers between 1 -10 to a variable
//called bank_account

let bank_account = 0;
for ( let i =1 ;i <= 10 ; i++) {
  bank_account+=i;  
}
console.log ( "your bank account is : $ " + bank_account) ;

// 2 - You got  a bonus ! Your pay is now doubled each week . Write code 
// that will save the sum of all numbers between 1 - 100 multiplied by 2 

let bonus = 0;
for ( let i = 1 ;i <=100 ; i++) {
    bonus = bonus + (i * 2);

}
bank_account=bonus ;
console.log ( "your bank account is : $ " + bank_account) ;


/*---------------------------*/
/*III. Arrays & Control flow */
/*---------------------------*/ 



// section A talk about 
//-----------------------//

// 1 - what are the things in array called ? 
// elements 

// 2 - Do Arrays guartantee those things will be in order ? 
// yes 

// 3 - What real-life thing could you model with an array ? 
//  friends name's 


// section B easy does it 
// ------------------------// 



const quotes  = ["If there is a will there is a way " , "No pain no gain " , "Love the life you live , Live the life you love"];



// section C  Accessing elements 
//--------------------------------// 


// Given the following array const  randomThings = [1 ,10 ,"Hello" ,true]

const randomThings =  [1, 10 ,"Hello" , true ];
// 1 - How do you access the 1 st element in the array ?
console.log ( randomThings [0] ) ;
// 2 - Change the value of "Hello" to "World"
randomThings [2] = "World" ;
// 3 - Check the value of the array to make sure it updated the array . How?
//yes !
console.log(randomThings [2]);
console.log(randomThings);
// by accessing randomThings array at the index of 2 
// after consol.log we see that there is no longer the string "Hello"
//instead we see the string "World"




// section  D Change values 
//----------------------------//

//Given the following array const ourClass = ["Salty" , "Zoom" , "Sardine" , "Slack" , "Github" ];
ourClass = [ " Salty" , "Zoom" , "Sardine" , "Slack" , "Github"];


// 1 -  What would you write to access the 3 rd element of the array ?
console.log (ourClass [2]);
// by giving the index 2  

// 2 - Change the value of "Github"  to "octocat"
ourClass [4] = "octocat" ;

//3 - Add a new element , "Cloud City" to the array 
ourClass.push ("Cloud City");

console.log (ourClass);



// section E  mix it up 
// -------------------------//

// given the array 

const myArray = [5,10 , 500 ,20] ;

// 1 - Add the string "Aegon" to the end of the Array .Add another string 
// of your choice to the end of the Array

myArray.push ("Aegon","Hello");
console.log (myArray);

// 2 - Remove the 5 from beginning of the array 

myArray.shift();
console.log (myArray); 

// 3 - Add the string "Bob Marley" to the eginning of the array 

myArray.unshift("Bob Marley");
console.log (myArray);

// 4 - Remove the string of your choice from the end of the array

myArray.pop();
console.log (myArray) ;

// 5 - Reverse this array using Array.prototype.reverse () .  Did you mutate the 
// array ? What does mutate mean ? Did the .reverse () method return anything ?
console.log ("------------> next <----------");
console.log(myArray.reverse ());
console.log (myArray);

// Mutation is basically changing the array itself  
//instead of returning a new array with the changes

//.reverse ()  returns the array inversed  



// section F Biggie Smalls 
//--------------------------//

let num = 100 ; 
 
// Write an if .... else statement  that : 
// 1 - console.log () s "little number" if the number is  entered is less 100 
// 2 - console.log () s "big number"  if the number is greater of equal to 100 

if (num < 100 ) { 
    console.log ("little number");
} else  console.log ("big number");
 


// section G Monkey in the Middle 
//-----------------------------------//

// Write an if...... else if .... else statemet 
// 1 - console.log () "litlle number" if the number entered is less than 5
// 2 - if number entered is more than 10 log "big number"
// 3 - otherwise, log "Monkey"

let num2 = 2;

if (num2 < 5 ) { 
    console.log ("little number")
}else if (num2 > 10 ) {
    console.log ("big number")
} else console.log ("Monkey")



// section H in yout Closet ? 
//-----------------------------//

const KristynsCloset = [ 
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yello knit hat",
    "marshmallow peeps"
];
// thom's closet is more complicated . Checkout this nested data structure !!

const thomsCloset = [
    [
    //these are Thom's shirts 
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up"
],[
    //these are Thom's pants 
    "grey jeans",
    "jeans",
    "PJs"
],[ 
    //Thom's accessories 
    "wool mittens",
    "wool scarf",
    "raybans"

] 
];

// 1 - What's Kristyn wearing today ? Using braket notation to access 
//items in KristynsCloset , log the sentence "Kristyn rocking that " +
// the third item in Kristyn's closet + "today!" to the sentence 

console.log ( "Kristyn is rocking that " + KristynsCloset [2] + " today!");

// 2 - Kristyn just bought some sweet shades ! Add "raybans" to her closet after 
//"yellow knit hat"

KristynsCloset.splice(6,0,"raybans");
console.log(KristynsCloset);

// 3 - Kristyn spilled coffee on her hat ... modify this item to read
// "stained knit hat"  instead of yellow 

KristynsCloset [5] = "stained knit hat" ;
console.log (KristynsCloset);

// 4 - Put together an outfit for Tom ! using bracket notation ,access the first
//element in Thom's shirt array

console.log (thomsCloset [0][0]);

// 5 - In the same way ,access one item from Thom's pants array 

console.log (thomsCloset [1][0]);

// 6 - Access one item from Thom's accessories array 

console.log (thomsCloset [2][0]);


// 7 - Log a sentence about  what Thom's  wearing .Example : 'tom is looking 
//fierce in a grey button-up ,jeans and wool scarf ! '


console.log ("Thom is looking fierce in " +thomsCloset[0][0] + " , "+ thomsCloset[1][0]+ " and " +thomsCloset[2][0] + " !");


// 8 - Get more specific about what kind of PJs Thom's wearing this winter .
//Modify the name of this PJ oants to Footie Pajamas 


thomsCloset [1][2] = "Footie Pajamas"; 

console.log (thomsCloset);





/*-----------------------*/
/* IV. Functions   ------*/
/*-----------------------*/


// A - print Greeting 
//------------------------/

// Do you think you could write a function called printGreeting with a 
//pramater name that returns a  greeting with the argument interpolated into
//the greeting ?


const printGreeting = (name) =>{
return "hello there , "+name ;
}

console.log (printGreeting ("Slimer"));


// B - printCool 
//-----------------/

//write a function printCool that accepts one pramater , name as an 
//argument . the function should print the name and a message saying that
//person is cool .

const printCool = (name) => { 
return  name + " is cool";
}

console.log ( printCool ("Captain Reynolds") );



// C - calculateCube  
//---------------------/


//  write a  function calculateCube that takes a single number and print 
// the volume of cube made from that number .

const calculateCube = (num) => {
    return num*num*num ;
}
console.log (calculateCube (5));


// D -isVowel 
//-----------------/
/* write a function isVowel that takes a charachter (i.e a string of length 1)
and returns true if it is a vowel , false otherwise . the vowel could be upper or lower case 
test your function on every vowel and make sure it's working .In general 
when you write a function , take a minute to test them with diffrent values to make sure they
behave the way you want */

const isVowel = (char) => { 
    if ( char === "a" || char === "e" || char === "i" || char === "u"  || char === "o" || 
    char === "A" || char === "E" || char === "I" || char === "U"  || char === "O") {
        return true 
    }else return false ;
} 

console.log ( isVowel ("u"));


// E - getTwoLengths 
//---------------------/

// Write a function getTowLengths that accepts two pramaters (string).
//The function should return an array of numbers where each number is the length
//of the corresponding string 

const getTowLengths = (wordOne , wordTow ) => {
    let arr = [wordOne.length , wordTow.length];
    return arr ;
}

console.log (getTowLengths ("Hank","Hippopopalous"));



// F - getMultiplelengths 
//--------------------------/

const getMultiplelengths = (arr) => {
    let arr2 = [];
    for ( let i = 0 ;i < arr.length ; i++ ) {
        arr2.push(arr[i].length);
    }
    return arr2 ;
}

console.log (getMultiplelengths (["hello" , "what" , "is" , "up" , "dude"] ));

// G - maxOfThree 
//------------------//

const maxOfThree = (num1 ,num2 ,num3) => {
    let arr = [num1 ,num2 ,num3];
    arr.sort ( (a ,b) => {
        return b-a ;
    })
    return arr [0];
}

console.log (maxOfThree (9,9,16));


// H - printLongestWord 
//-------------------------/

const printLongestWord = (arr) => {
    let longest = "" ;

    for (let i = 0 ; i < arr.length ; i++) {
        if (arr [i].length > longest.length ){
            longest = arr [i];
        }
    }
    return longest ; 
}

console.log( printLongestWord (["BoJack", "Princess", 
"Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));




