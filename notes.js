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

   return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
   var change = startingAmount % costPerBottle;
   return change;
}

console.log("Hello master, here is your " +getMilk(5, 1.5) + " change."); 



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








