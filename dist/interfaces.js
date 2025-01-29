// What are interfaces?
// Interfaces are a way to define custom types in TS.
// They are basically a JS object that is guaranteed to be typed in a certain way.
// We can ignore this class it is just an empty class used for example.
class Item {
}
// We can now use this interface in place of an object type
// if we try to use something that is not defined in the interface.
let newCustomer = {
    // We define the name as strings and the age as a number.
    firstName: "George",
    lastName: "Alfred",
    age: 67,
    favoriteItem: new Item(), // We Make a new Item for the newCustomers favoriteItem.
};
// We can also make it so that we do not need to satisfy the entire interface.
let partialCustomer = { firstName: "Bob", lastName: "Paul" };
// Notice that only the fists and last names are defined.
// We can also omit some parts of the interface from a variable.
// This essentially returns a new type that has all the properties of the old interface,
// but it does not allow for the types that are omitted.
let noFavItemCustomer = {
    firstName: "Henry",
    lastName: "Phillips",
    age: 45,
};
// We can log a customer to see what we get in the console:
console.log("A customer as defined by the customer interface:");
console.log(newCustomer);
