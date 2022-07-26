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


