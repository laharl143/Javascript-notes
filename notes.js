alert(Erskine);
typeof(23);
"number"
typeof("Angela");
"string"
typeof(true);
"boolean"

prompt("What is your name?");

var myName ("Erskine");


var myName = "Erskine";
var yourName = prompt("What is your name?");
alert("My name is " + myName + ", welcome to my course " + yourName + "!");


var gameLevel = 1;
gameLevel = 2;
gameLevel = 3;
alert("Your level is currently: " + gameLevel);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = "3";
var b = "8";

/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
var c = a;    //bucket switch technique 
a = b;
b = c;
/***********Do not change the code below 👇*******/

console.log("a is " + a);
console.log("b is " + b);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Rules in Naming Your variables

var myName = "Erskine";
var yourName = "Joanna";
var myvar = "abc";            // you cant name your variable with "var" but you can add addtional letters for it to be valid
var my123 = "Erskine";        // you cant name your variable with a bnumber but you can add addtional letters for it to be valid
var my name = "Erskine"       // you can't put space in your variable name
var abc123$_ = "Only Valid"   // you can only name your valiables with "letters", "numbers", "dollar sign($)" and "underscore(_)". NO OTHER!

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Concatenation

var message = "Hello";
var name = "Erskine";

//Write your code below this line:
//Hello there, Erskine.

alert(message + " there, " + name + ".")



// Write this in alert: You have written 140 characters, you have 40 characters left.

var tweet = prompt("Compose your tweet:");

var tweetWritten = tweet.length
var tweetLeft = 180-tweet.length

alert("You have written " + tweetWritten + " characters, you have " + tweetLeft + " characters left.")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Slicing and Extracting parts of a string

// Funtion called slice :    "variable".slice(x,y)

var name = "Erskine";
name.slice(0,1);         //programmers always count starting from 0 to n

output: "E"

var name = "Erskine";
name.slice(5,6);

output: "n"

var name = "Erskine";
name.slice(0,3);

output: "Ers"

var name = "Erskine";
name.slice(1,5);

output: "rski"
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Challenge: a tweet that cuts down to 140 characters.

var tweet = prompt("Compose your tweet:");
var tweetUnder140 = tweet.slice(0,140);

alert(tweetUnder140)

//alternative solution (shorter solution!)

alert(prompt("Compose your tweet:").slice(0,140));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Upper Case or Lower Case

var name = "Erskine";
name.toUpperCase();       //DONT FORGET THE OPEN AND CLOSE PARENTHESIS!!!!!

output: "ERSKINE"

var name = "Erskine";
name.toLpperCase();

output: "erskine"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Challenge: make the name showing in alert to capitalize only the First Letter

//MySolution:
var name = prompt("What is your name?");
var firstLetter = name.slice(0,1);
var firstUpperLetter = firstLetter.toUpperCase();

alert("Hello, " + firstUpperLetter + name.slice(1,100) +"!")

input: "erskine"      output: "Hello, Erskine!"

//AngelaYu'sSolution: 
//Step 1: Create a var that stores the name that user enters via prompt
var name = prompt("What is your name?")

//Step 2: Capitalize the first letter of their name
    //Step 3: Isolate the first char
    var firstChar = name.slice(0,1);

    //Step 4: Turn the first char to upper case
    var upperCaseFirstChar = firstChar.toUpperCase();

//Step 5: Isolate the rest of the name
var restOfName = name.slice(1,name.length);

//Step 6: Turn the rest of the name to lower case
var lowerCaseRestOfName = restOfName.toLowerCase();

//Step 7: Concactenate the first char with the rest of the char
var capitalisedName = upperCaseFirstChar + lowerCaseRestOfName;

//Step 6:  We use the capitalised version of their name to greet them using an alert.
alert("Hello, " + capitalisedName);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic Arithmetic and Modulo Operation

Addition:   var a = 2 + 3; //5
Subtraction:var b = 10 - 2; //8
Multiplication: var c = 3 * 3;//9
Division: var d = 6 / 2; //3

Modulo: var e = 9 % 6; //3    //How modulo works? It is the remainder of the numbers after it is divided.
        var f = 5 % 2; //1
        var g = 10 % 4; //2

// Other usecase of Modulo: To determine if the number is even or odd
45 % 2 = 1 //if the answer is 1, it is an odd number
44 % 2 = 0 //if the answer is 0, it is an even number

//Math or Arithmetic Operations in programming respects the PEMDAS(parenthesis,exponent,multiply,division,addition,subtraction) rule!

//Challenge: Dog Age to Human Age formula

//My Solution:
var dogAge = prompt("How old is your Dog?");
var humanAge = (dogAge - 2) * 4 + 21;  //use parenthesis if you want to prioritize it

alert("Your dog's human age is " + humanAge)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Increment and Decrement Expressions

var x = 5;
x = x + 1; //6

//is the same as 

var x = 5;
x ++; //6         //This is called Increment Expression


var x = 5;
x = x - 1; //4

//is the same as 

var x = 5;
x --; //4         //This is called Decrement Expression

//If you want to increase the increment by more than one, use this:

var x = 5;
x += 2; //7      //I want to increment x by 2


var x = 5;
var y = 3;
x += y; //8     //I want to increment x by the value of y

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Functions

function getMilk(bottles) {   
    console.log("leaveHouse");   //or you can replace console.log to alert. the main difference is alert will notify the user, while console log only notifies the developer
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + bottles + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
// to call this function: simply type
getMilk();

//Challenge!!!!: put how much is the budgetted money then perform a math to how much bottle will be bought with the current money

function getMilk(money) {   
    var bottleCost = 1.5;
    var bottle = Math.floor(money / bottleCost);
    //Math.floor is used to round a number downward to its nearest integer
    console.log("leaveHouse");   
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    alert("buy " + bottle + " bottles of milk using " + money + "$");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
getMilk(7); //output will be a round number due to the function Math.floor

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Output & Return Value

function aFunction(a, b){
   return a * b;              //return means it is the end of the function when it assigns the operation inside the function
}
   aFunction(3,4); //output: 12

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getMilk(money, costPerBottle) {   
   console.log("leaveHouse");   
   console.log("moveRight");
   console.log("moveRight");
   console.log("moveUp");
   console.log("moveUp");
   console.log("moveUp");
   console.log("moveUp");
   console.log("moveRight");
   console.log("moveRight");
   
   console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");
   
   console.log("moveLeft");
   console.log("moveLeft");
   console.log("moveDown");
   console.log("moveDown");
   console.log("moveDown");
   console.log("moveDown");
   console.log("moveLeft");
   console.log("moveLeft");
   console.log("enterHouse");

   return calcChange(money, costPerBottle);
 }

function calcBottles(startingMoney, costPerBottle) {

   var numberOfBottles = Math.floor(startingMoney / costPerBottle);

   return numberOfBottles;                 //return means it is the end of the function when it assigns the operation inside the function
}

function calcChange(startingAmount, costPerBottle) {
   var change = startingAmount % costPerBottle;
   return change;
}

console.log("Hello master, here is your " +getMilk(5, 1.5) + " change."); 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Challenge!!!!
//BMI Calculator

//angela yu's soln
function bmiCalculator(weight, height) {
    
   var bmi = weight / (height * height);            // the formula of bmi is weight divide by the height^squared

   return Math.round(bmi);                          //Math.round is used to round off numbers
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);      


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Challenge: Life in weeks Coding Exercise    https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/quiz/4807840#notes

//My Solution:
function lifeInWeeks(age) {
    
        var x = (90 * 365) - (age * 365); 
        var y = (90 * 52) - (age * 52);
        var z = (90 * 12) - (age * 12);
        console.log("You have " + x + " days, " + y + " weeks, " + "and " + z + " months left.");
           
    
    }
    lifeInWeeks(56)


//Angela Yu's Solution:
function lifeInWeeks(age) {
    
        var yearsRemaining = 90 - age; 
        var days = yearsRemaining * 365;
        var weeks = yearsRemaining * 52;
        var months = yearsRemaining * 12;
        console.log("You have " + days + " days, " + weeks + " weeks, " + "and " + months + " months left.");
           
    
    }
    lifeInWeeks(56)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Stanford Karel IDE Challenge

https://stanford.edu/~cpiech/karel/ide.html

//Challenge 1: move karel to upper right corner
//My Solution:
function main(){
    moveToUpperRight();
 }
 
 function moveToUpperRight() {
    move();
    move();
    move();
    move();
    turnLeft();
    move();
    move();
    move();
    move();
    
 }

//Angela Yu's Solution:
function main(){

    moveFourTimes();
    turnLeft();
    moveFourTimes();
 }
 
 function moveFourTimes() {
    move();
    move();
    move();
    move();
 }

 //Challenge 2: put putBeeper diagoanally till u reach upper right corner
 //My solution: Same as Angela Yu's
 function main(){
    putBeeperMoveTurnLeftMove();
    putBeeperMoveTurnLeftMove();
    putBeeperMoveTurnLeftMove();
    putBeeperMoveTurnLeftMove();
    putBeeper();
 }
 
 function putBeeperMoveTurnLeftMove() {
    putBeeper();
    move();
    turnLeft();
    move();  
    turnRight();
 }
 
  //Challenge 2: make Karel do a chessboard pattern
  //My solution: Same as Ms.Angela Yu's
  function main(){
    moveToRightWhilePutBeeper();
    moveNorthFromRight();
    moveToLeftWhilePutBeeper();
    moveNorthFromLeft();
    moveToRightWhilePutBeeper();
    moveNorthFromRight();
    moveToLeftWhilePutBeeper();
    moveNorthFromLeft();
    moveToRightWhilePutBeeper();
 }
 
 function moveToRightWhilePutBeeper() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
 }
 
 function moveNorthFromRight() {
    turnLeft();
    move();
    turnLeft();
 }
 function moveToLeftWhilePutBeeper() {
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
 }
 
 function moveNorthFromLeft() {
    turnRight();
    move();
    turnRight();
 }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Random Number Generator

var n = Math.random();
console.log(n);     //the output generates a random number upto 16 decimal places but but not greater or equal than 1, but it can be 0


//Pseudo Random Generator

var n = Math.random();     
n = n * 6;                 //this limits the random number upto (0 to 5.99) but not 6
n = Math.floor(n) + 1;     //Math.floor is used to get the floor number and shave the decimal place     //+1 is used so that the range becomes 1-6 instead of 0-5
console.log(n);  


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Challenge: Make a love calculator using RNG

//My solution:
prompt("Hi! What is your name?");

prompt("2nd Question. What is your partner's name?");

var n = Math.random();
n = n * 100;               //100, to make the RNG choose 0-99.9999999
n = Math.floor(n) + 1;     //math floor, to make the output whole number         //+1, to make the RNG range to 1-100

alert("Your love score is " + n);

// Angela Yu's Solution
prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert("Your love score is " + loveScore);   

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Control Statements: Using If-Else conditions & Logic

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; //1-100

if (loveScore > 70) {
   alert("Your love score is " + loveScore + "%" + " You love each other like Kanye loves Kanye.");  
}  
else {
   alert("Your love score is " + loveScore + "%");  
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Comparators and Equality
                                      //example of data types: "string" "number" "boolean". you can check the data type using typeof();
/* === Is equal to                    // ===, the data type matters while  ==, the data type doesnt matter
   !== Is not equal to                // above is the difference between === and ==
   >   Is greater than
   <   Is lesser than
   >=  Is greater or equal to
   <=  Is lesser or equal to 
   &&  AND
   ||  OR  
   !   NOT (or the opposite of something)
*/


prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; //1-100

if (loveScore > 70) {
   alert("Your love score is " + loveScore + "%" + ". You love each other like Kanye loves Kanye.");  
}
if (loveScore > 30 && loveScore <= 70) {                 //&& is used to implement AND
   alert("Your love score is " + loveScore + "%");  
}   
if (loveScore <= 30) {
   alert("Your love score is " + loveScore + "%" + ". You go together like oil and water."); 
}  


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Challenge: BMI calculator Advanced (IF/ELSE)

// My solution:
function bmiCalculator(weight, height) {
    
   var bmi = weight / (height * height);            // the formula of bmi is weight divide by the height^squared

   return Math.round(bmi);                          //Math.round is used to round off numbers
}

var bmi = bmiCalculator(65, 1.8);

if (bmi < 18.5) {
   console.log("Your BMI is " + bmi + ", so you are underweight.");  
}
if (bmi >= 18.5 && bmi <= 24.9) {
   console.log("Your BMI is " + bmi + ", so you have a normal weight.");  
}
if (bmi > 24.9) {
   console.log("Your BMI is " + bmi + ", so you are overweight.");  
}

// Angela Yu's Solution: NO soln given, but my answer is correct

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Challenge: Leap Year Challenge Exercise          https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/quiz/4807956#content

// My solution: NONE! Hirap.

// Angela Yu's Solution:

function isLeap(year) {                            //Note!: you need a flowchart guide to answer this correctly.
                                                   //this is the flowchart of this challenge: https://viewer.diagrams.net/?target=blank&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Leap%20Algorithm#R7VpNc9owEP01HNuxJdmYY4CkzTTNdEpmmhyFrdhqhcXIIkB%2BfSUsY4wcQhqwC%2B0p0urDu29Xu08KHTiYLD4JPE2%2B8oiwDnCiRQcOOwC4CPjqj5Ysc0k3gLkgFjQyk0rBiD4TI3SMdEYjklUmSs6ZpNOqMORpSkJZkWEh%2BLw67ZGz6lenOCaWYBRiZkt/0EgmuTQA3VL%2BmdA4Kb7s%2Br18ZIKLycaSLMERn2%2BI4GUHDgTnMm9NFgPCNHgFLvm6qxdG14oJksp9FoDbYTJlQFxPomj0Jbzr4tT9YJTN5LIwmETKftPlQiY85ilml6W0L/gsjYje1VG9cs4N51MldJXwJ5FyaZyJZ5IrUSInzIwqhcXyXq//6BXdB7PdqjNcVHpL08t11Qq%2BCIERZXwmQrLD7iKUsIiJ3DEPrB2lIpzwCVH6qHWCMCzpU1UPbEItXs8rvaEaxiFvcI7Z9wmzmfnS6O7i%2B53lstIhGt15QiUZTfHK/rk6lVXwzZ5ESLLYDaNttlkAYE85brVoWZxWE%2BTz8oy4xRFONs4Hco6ElfePBjLYM5DhOwN5tfRCCLzcmDDlNJXZxs7ftKAMFLcLtgKlyOulq/M9S8evlfvzWPD/x8LOWHCdQwSD5W3kdre97W8d91w1s64Mg7fGFQLWl5qIK2Dl4%2BtMr9GahYzglGkjOsBnCv3%2BWKhWrFsRfaIZHas4A85YT0EdeGVn8YRPxrOsmQxe8Jcif3dr8jf07PwdHCt/QwvbW65xvSHK/HcVvEfK2IAzLlZr4WMQkjBU8kwK/otsjIwDD3nOYQB23SrA65PQWoHs1gBsAasMllX0MKNxqtqhMpwooPoaFqr48YUZmNAoyjMoyegzHq%2B20iiaQ6z29fodb6j3Ukkzy/PngeLYDSwm0rOBhjU4g2PhHFg4P5Ds5IGG/j5AoyaBdmErZX5B5X1RyFX7oaz4qlfWeN0pSvxfQA2KVPM6N2j3xhO06VP3XH2KWvWpcyjapG%2BZLRMn6IPX63pdvTkacXJtVnpwzhR5JIhQHWcKwBj6/oFIqVfFFtaR0kY5E2jnVeFESwzaMx2BVtMRaOd14ERLzL4%2BdXutlhh0qBKD2i8xyNum2rWJsI5rH6/I9M6lyHi9bXRRzUWm4TJjM6RzuDOi3hZXClq%2BMRYmnNcbCHS3I7oO6EbfQIDNSc8AaGQBDdt%2BbAL2s%2Bk5ZA47Sdch3WzusCnGST9QQ9RkHVTd8ocO%2Bb9jyp%2BLwMvf
   if (year % 4 === 0) {                           //this is an online flowchart maker: https://app.diagrams.net/
       if (year % 100 === 0) {                     //note: return means u go up 1 step in the flowchart.
           if (year % 400 === 0) {                 //% modulo is used here because we are looking for a non remainder answer "cleanly divisible"
               return "Leap year.";
           } else {
               return "Not leap year.";
           }
       } else {
           return "Leap year.";
       }
   } else {
       return "Not leap year.";
   }
                                 
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Collections. Javascript Arrays

// Angela
// Jack
// Pam
// James
// Lara
// Jason

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"]   //squared brackets means it is an array
console.log(guestList);

//output: (6) ['Angela', 'Jack', 'Pam', 'James', 'Lara', 'Jason']

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"]   
console.log(guestList.length);                                        //putting ".length" can give an output of how many are inside the array

//output: 6

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"]   
guestList[0];

//output: "Angela"

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"]   
guestList[1];

//output: "Jack"

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"]   
guestList.includes("Angela");

//output: true

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"]   
guestList.includes("Erskine");

//output: false


//Challenge!!!!!!!!!!!!!!: in arrays

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"]

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)) {
    alert("Welcome!")
} else {
    alert("Sorry, maybe next time")
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .push & .pop


var output = [];
var count = 1;

function fizzBuzz() {
output.push(count);                // .push means adding an element to the array
count++;                           // ++ means increment by 1
    
    console.log(output);
}

// output every fizzBuzz() input; [1]
//                                [1, 2]
//                                [1, 2, 3]

//Challenge!!: FizzBuzz challenge ; If the number is a multiple of 3, it should print "Fizz". If the number is multiple of 5, it should print "Buzz". 
//                                  If the number is a multiple of both 5 & 3, it should print "FizzBuzz"
var output = [];
var count = 1;

function fizzBuzz() {

if (count % 3 === 0 && count % 5 === 0) { 
    output.push("FizzBuzz");
}
else if (count % 3 === 0) {
    output.push("Fizz");
}       
else if (count % 5 === 0) {
    output.push("Buzz");
} 
else {
    output.push(count);
}

count++;
    
    console.log(output);
}
// output: [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz', 'Fizz', 22]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Challenge!: Who's buying lunch? Code challenge.

var names = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"]          // this is the variables included

function whosPaying(names) {

   var numberOfPeople = names.length;                                     //calculate how many names are there           
   var randomPersonPosition = Math.floor(Math.random() * numberOfPeople); // (Math.random() * numberOfPeople) = picks from [0-4.9999]  ; Math.floor shaves the decimal
   var randomPerson = names[randomPersonPosition];                        //square bracket is used to choose from an array

   return randomPerson + " is going to buy lunch today!";                 //this is the output
   
}

//input in console: whosPaying(names)

//output: "Jack is going to buy lunch today!"          //Note!: the output will be random from the selected variables in the [names] array
//        "Jason is going to buy lunch today!"
//        "Pam is going to buy lunch today!"
