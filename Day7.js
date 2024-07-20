//Day-7:-Objects

//Activity 1: Object Creation and Access
//Task-1 :  Create an object representing a book with properties like title, author, and year, and log the object to the console.
let bookdetails = {
    title: "Javascript",
    author: "king",
    year: 2000,
}
console.log(bookdetails);

//Task-2 :  Access and log the title and author properties of the book object.
console.log(bookdetails.title); //javascript
console.log(bookdetails.author);//king
console.log(bookdetails["title"]);//javascript
console.log(bookdetails["author"]);//king

//Activity 2:Object Methods
//Task-3 : Add a method to the book object that returns a string with the book’s title and author, and log the result of calling this method.
bookdetails.info=function info(){
    return (`the title of the book is ${this.title} and wriiten by the author is ${this.author}`);
}
console.log(bookdetails.info());

//Task-4 : Add a method to the book object that takes a parameter (year) and updates the book’s year property, then log the updated object.
bookdetails.updateyear=function updateyear(year){
    return this.year=year;
}

console.log(bookdetails.updateyear(2023));
console.log(bookdetails);

//Activity 3:Nested Objects
//Task-5 : Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let booklib={
    namelib:"maxlib",
    books:[
        {
            title:"java",
            author:"ABC"
        },{
            title:"javascript",
            author:"XYZ"
        }
    ]
}
console.log(booklib);
//Task-6 :  Access and log the name of the library and the titles of all the books in the library.
console.log("Library name:"+booklib.namelib);
booklib.books.forEach(book => {
    console.log(book.title);
});

//Activity 4 : The This Keyword
//Task-7 :  Add a method to the book object that uses the this keyword to return a string with the book’s title and year, and log the result of calling this method.
bookdetails.details = function(){
    return (`the title of the book is ${this.title} publishes in the year ${this.year}`)
}
console.log(bookdetails.details());

//Activity 5: Object Iteration
//Task-8 : Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for(let property in bookdetails){
    console.log(`${property} : ${bookdetails[property]}`);
}

//Task-9 :  Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(bookdetails));
console.log(Object.values(bookdetails));