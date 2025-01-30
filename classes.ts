// TS also enhances the native JS classes quite a bit.
// It provides features such as:
// - Typing for class members (properties and methods)
// - Static members
// - Access modifiers

// Take a look at interfaces.ts if you do not know how interfaces work yet.
interface BookLayout {
	// Here we define the structure of a book.
	// We have an array of chapters, with each chapter having a title and an array of pages.
	bookTitle: string;
	chapters: {
		title: string;
		pages: {
			pageNumber: number;
			content: string;
		}[];
	}[];
}

// Here is a very simple TS class:
class Book {
	// First we define a few properties.
	// Note: setters do not have a return type

	private _title: string;
	private _pageCount: number;
	private _pages: BookLayout;

	get title(): string {
		return this._title;
	}

	set title(value: string) {
		this._title = value;
	}

	get pageCount(): number {
		return this._pageCount;
	}

	set pageCount(value: number) {
		this._pageCount = value;
	}

	// We can use access modifiers on a member.
	// Do note though that this code will compile down to JS, which does not
	// have access modifiers. This means that the modifiers are good for helping
	// you has a dev, but they are in no way a safety feature.
	// Here we make this setter private:
	private set pages(value: BookLayout) {
		this._pages = value;
	}

	// Next lets make a constructor.
	// We do not add a return type for the constructor.
	constructor(title: string, pageCount: number, pages: BookLayout) {
		this.title = title;
		this.pageCount = pageCount;
		this.pages = pages;
	}

	// Then we can add some methods to the class:
	public Read(): void {
		// Here we use the map function to print out our full book.
		console.log(`Title: ${this._pages.bookTitle}`);
		console.log(`Book Length: ${this._pageCount}`);
		this._pages.chapters.map((chapter) => {
			console.log(`Chapter Title: ${chapter.title}`);
			chapter.pages.map((page) => {
				console.log(
					`Page#: ${page.pageNumber}\nPage Content:\n${page.content}`
				);
			});
		});
	}
}

// using the class:
// First we will make a book layout with the interface above:
let layout: BookLayout = {
	bookTitle: "Ryan's book",
	chapters: [
		{
			title: "Chapter 1",
			pages: [
				{
					pageNumber: 1,
					content: "This is page one of my book",
				},
				{
					pageNumber: 2,
					content: "This is page two of my book",
				},
				{
					pageNumber: 3,
					content: "This is page three of my book",
				},
			],
		},
		{
			title: "Chapter 2",
			pages: [
				{
					pageNumber: 4,
					content: "This is page number 4",
				},
				{
					pageNumber: 5,
					content: "This is page number 5",
				},
			],
		},
	],
};

// Then we an make a new instance of the book class using a title, page count, and layout.
let myBook: Book = new Book("My Book", 5, layout);

// We can then access the properties of the class:
myBook.Read();
