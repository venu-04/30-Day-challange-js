//Activity 1:Template Literals
//Task-1 :  Use template literals to create a string that includes variable for a person's name and age, and log the string to the console.
let name="venu";
let age=20;
const str=`${name} is ${age} years old`;
console.log(str);

//Task-2 :  Create a multi-line string using template literals and log it to the console.
let s= `The quick brown
fix jumps over
the lazy dog`;
console.log(s);

//Activity 2: Destructuring
//Task-3 :  Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let arr=[1,2,3,4,5]
const [a,b]=arr;
console.log(`a = ${a}`);
console.log(`b = ${b}`);

//Task-4 : Use object destructuring to extract the title and author from a book object and log them to the console.
let book={
    title : "javascript",
    author : "ABC",
    year : 2020
}
const {title,author}=book;
console.log(` book title is ${title}`);
console.log(` the author of the book is ${author}`);

//Activity 3: Spread and Rest Operators
//Task-5 : Use the spread operator to create a new array that includes all elements of an existing array plug additional elements, and log the new array to the console.
const arr1=[1,2,3,4,5];
const arr2=[...arr1,6,7,8]
console.log(arr2);

//Task-6 : Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers){
    let sum=0;
    numbers.forEach(num=>sum+=num)
    return sum;
}
console.log(sum(1,2,3,4,5));
console.log(sum(1,2,3,4,4,5,6,7,7));

//Activity 4 : Default parameters
//Task-7 : Write a function that takes two parameters and return their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function prod(a,b=1){
    return a*b;
}
console.log(prod(2));
console.log(prod(3,4));


//Activity 5: Enhanced Object Literals
//task-8 : Use enhanced object literals to create an object with methods and properties, with computed property names based on variables and log the object to the console.
let fname="javascript";
let Age=20;
let person={
    fname,
    Age,
    userDetails(){
        console.log(`username:${fname}\nAge:${Age}`);
    }
}
console.log(person);
person.userDetails();

