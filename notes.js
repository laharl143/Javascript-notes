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
