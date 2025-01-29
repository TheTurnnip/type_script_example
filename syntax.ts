// Declaring variables with types:
// The : precedes a type and lets the compiler know that the var is that type
// Some of the types that you can use are:
// - string
// - number
// - bigint
// - object
// - boolean
let myName: string = "Ryan Steffan";
let myFavoriteNumber: number = 7;
let myObject: object = {
	fn: "Ryan",
	ln: "Steffan",
};
let hasGlasses: boolean = true;

// We can also define an array of a type with the type[] syntax
// Example:
let foods: string[] = ["pizza", "hamburgers", "chips", "salad"];

console.log(`Foods: ${foods}`);

// We can also define the types of an object:
let person: { name: string; age: number } = {
	name: "Fred",
	age: 43,
};

// Variables can also be give the type of a class or interface:
// Checkout the respective .ts files for examples of each.

// How to add types to a function
// Adding types to a function is much the same:
function printAboutMe(name: string, favoriteNumber: number): string {
	return `${name}'s favorite number is: ${favoriteNumber}`;
}
// What is this function doing?
// We are taking in the args, name of type string, and favoriteNumber of type number,
// and then we are returning the type of string.
// The return type is placed after the arguments and can also be type void

// Lets print the methods and see what we returned.
console.log(printAboutMe(myName, myFavoriteNumber));

// We can also define arrow functions with types
let printFavoriteNumber = (favNumber: number): void => console.log(favNumber);

// How to bypass TS
// You may run into some situation where TS is causing to many issues and you want to use
// the dynamic types of JS. To do this we use the any type/
let favoriteBook: any = "Harry Potter";

// A better way to deal with this is to make a variable accept more than one type.
// We can use the syntax:
let myNumber: number | string = 67; // The | is used to separate the different allowed types

// This does mean that we will have to do runtime, type checking
// and to do so you use the typeof keyword.
if (typeof myNumber === "number") {
	console.log("My number is really a number.");
} else {
	console.log("My number is actually a string.");
}
