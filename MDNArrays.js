/* MDN documnetation on Arrays
Date: 25-04-2020; 23:30


*/
let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping)
shopping[0] = 'custard'
console.log(shopping)
let random = ['tree', 795, [1,2,3]];
console.log(random[2][2]);
console.log(shopping.length);

let sequence = [1, 1, 2, 3, 5, 8, 13];

 for (i = 0; i < sequence.length; i++){
    console.log(sequence[i])
}

for (i = 0; i< shopping.length; i++) {
    console.log(shopping[i].toUpperCase());
}
let myData = 'Manchester, London, Liverpool, Birmingham, Leeds, Carlisle';
let myArray = myData.split(',');
console.log(myArray)
console.log(myArray[myArray.length-1])
let myNewstring = myArray.join('=')
console.log(myNewstring)
let dogNames = ['Rocket', 'Föash', 'Beggar', 'slugger'];
console.log(dogNames.toString())
console.log(myArray.push('Bradford', 'Norway', 'Barce'))
console.log(myArray)
let newLength = myArray.push('Spain');
console.log(newLength)
let removeLast = myArray.pop()
console.log(removeLast)
console.log(myArray.unshift('Edinburgh'))
let firstOff = myArray.shift()
console.log(firstOff)

/*
Active learning: Printing those products!
Let's return to the example we described earlier — printing out product names 
and prices on an invoice, then totaling the prices and printing them at the 
bottom. In the editable example below there are comments containing numbers — 
each of these marks a place where you have to add something to the code. They 
are as follows:

Below the // number 1 comment are a number of strings, each one containing 
a product name and price separated by a colon. We'd like you to turn this into 
an array and store it in an array called products.
On the same line as the // number 2 comment is the beginning of a for loop. 
In this line we currently have i <= 0, which is a conditional test that causes 
the for loop to only run once, because it is saying "stop when i is no longer 
less than or equal to 0", and i starts at 0. We'd like you to replace this with 
a conditional test that stops the loop when i is no longer less than the products
 array's length.
Just below the // number 3 comment we want you to write a line of code that 
splits the current array item (name:price) into two separate items, one 
containing just the name and one containing just the price. If you are not sure 
how to do this, consult the Useful string methods article for some help, or even 
better, look at the Converting between strings and arrays section of this article.
As part of the above line of code, you'll also want to convert the price from 
a string to a number. If you can't remember how to do this, check out the first 
strings article.

There is a variable called total that is created and given a value of 0 at the 
top of the code. Inside the loop (below // number 4) we want you to add a line 
that adds the current item price to that total in each iteration of the loop, 
so that at the end of the code the correct total is printed onto the invoice. 
You might need an assignment operator to do this.

We want you to change the line just below // number 5 so that the itemText 
variable is made equal to "current item name — $current item price", for 
example "Shoes — $23.99" in each case, so the correct information for each 
item is printed on the invoice. This is just simple string concatenation, 
which should be familiar to you.
*/

// number 1
/*     'Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];
                */

let products = ['Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];


for (let i = 0; i < products.length; i++) { 
 let prodSpli = products[i].split(':');
 let name = prodSpli[0];
 let price = Number(prodSpli[1]);

 let total = 0
    total += price
let itemText = name + '- $' + price;
console.log(itemText)

}
  // 
  I've through a lot in many ways
  And proud of my rainny days  
  Its been a longtime coming
  getting into the matrix cos we wanna make it
  going for the horserace
  I don't wanna rattle with people in the rat race
  Now, we low so training to jump over the hurdles
  We gonna make it burning the midnight candles
  Just remain humble and you will never struggle