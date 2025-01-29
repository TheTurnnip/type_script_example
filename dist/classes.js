// TS also enhances the native JS classes quite a bit.
// It provides features such as:
// - Typing for class members (properties and methods)
// - Static members
// - Access modifiers
// Here is a very simple TS class:
class Book {
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get pageCount() {
        return this._pageCount;
    }
    set pageCount(value) {
        this._pageCount = value;
    }
    // We can use access modifiers on a member.
    // Do note though that this code will compile down to JS, which does not
    // have access modifiers. This means that the modifiers are good for helping
    // you has a dev, but they are in no way a safety feature.
    // Here we make this setter private:
    set pages(value) {
        this._pages = value;
    }
    // Next lets make a constructor.
    // We do not add a return type for the constructor.
    constructor(title, pageCount, pages) {
        this.title = title;
        this.pageCount = pageCount;
        this.pages = pages;
    }
    // Then we can add some methods to the class.
    // These are just example methods, they do not have an actual logic to them.
    GetPage(pageNumber) {
        return "BLANK_PAGE";
    }
    Read() {
        // Logic would be here for a user to read a book.
        // We are just going to log a message to the console in place of that.
        console.log("Reading...");
    }
}
// using the class:
// First we will make a book layout with the interface above:
let layout = {
    chapters: [
        {
            title: "Chapter1",
            pages: ["Page1", "Page2", "Page3"],
        },
    ],
};
// Then we an make a new instance of the book class using a title, page count, and layout.
let myBook = new Book("My Book", 1, layout);
// We can then access the properties of the class:
myBook.Read();
console.log(myBook.GetPage(3));
