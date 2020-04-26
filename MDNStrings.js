/*
Strings 2
In this task you are provided with two variables, quote and substring, 
which contain two strings. We would like you to:
Retrieve the length of the quote, and store it in a variable called quoteLength.
Find the index position where substring appears in quote, and store that value 
in a  variable called index.
Use a combination of the variables you have and available string 
properties/methods to trim down the original quote to "I do not like green 
eggs and ham.", and store it in a variable called revisedQuote.
*/

let quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
let substring = 'green eggs and ham';
quoteLength = quote.length;
index = quote.indexOf('green eggs and ham')
console.log(index)
console.log(quoteLength)
let stop = quote.indexOf(".")
console.log(stop)
let result = quote.slice(0, 33)
console.log(result)

/*
Strings 3
In the next string task, you are given the same quote that you ended up with 
in the previous task, but it is somewhat broken! We want you to fix and update 
it, like so:

Change the casing to correct sentence case (all lowercase, except for upper 
case first letter). Store the new quote in a variable called fixedQuote.
In fixedQuote, replace "green eggs and ham" with another food that you really
 don't like. There is one more small fix to do — add a full stop onto the end of
the quote, and save the final version in a variable called finalQuote.
*/


let quoteNew = 'I dO nOT lIke gREen eGgS anD HAM';
let sliceQuote = quoteNew.slice(1)
lowQuote = sliceQuote.toLowerCase();
let firstChar = quote.substring(0,1)
let fullQuote = firstChar + lowQuote
let fixedQuote = fullQuote.replace('green eggs and ham', 'pommes')
let finalQuote = fixedQuote + ".";
console.log(finalQuote);


/*
Strings 4
In the final string task, we have given you the name of a theorem, two numeric 
values, and an incomplete string (the bits that need adding are marked with 
asterisks (*)). We want you to change the value of the string as follows:

Change it from a regular string literal into a template literal.
Replace the four asterisks with four template literal placeholders. These 
should be:
The name of the theorem.
The two number values we have.
The length of the hypotenuse of a right-angled triangle, given that the two
 other side lengths are the same as the two values we have. You'll need to look 
up how to calculate this from what you have. Do the calculation inside the 
placeholder.
*/
let theorem = 'Pythagorean theorem';

let a = 5;
let b = 8;

/* let myString = 'Using *, we can work out that that if the two shortest 
sides of a right-angled triangle have lengths of * and *, the length of the 
hypotenuse is *.'; */

let tempLiteral = `Using *, we can work out that that if the two shortest 
sides of a right-angled triangle have lengths of * and *, the length of the 
hypotenuse is *.`

let splitLit = tempLiteral.split('*');
let fir = splitLit [0] + theorem;
let sec = splitLit[1] + a;
let thir = splitLit[2] + b;

let hypote = 
function hypotenuse (a, b) {
return  c = a**2; let d = b**2;
return hypo = Math.sqrt(c) + Math.sqrt(d);
};

let full = fir + sec + thir + splitLit[3] + hypote (a, b);


// let e = c.sqrt;
console.log(full)
