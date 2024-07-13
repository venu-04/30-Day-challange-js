//Activity 1 : Variable Declaration

//Task 1:-

var num1 = Number()
console.log(num1); //output = 0

var num2=Number(2);
console.log(num2); //output = 2


// Task-2
let str=String();
console.log(str); //output = ""

let str2=String("venu")
console.log(str2); //output = venu

//Task-3
let obj1=Object()
console.log(obj1); //output = {}

//Activity 2 :- constant Declaration
//Task-3
const bool=Boolean()
console.log(bool); //output = false


//Activity 3 : data type
let str4=String()
console.log(typeof str4); //output = string

let num5=Number()
console.log(typeof num5) //output = number

let bool1 =Boolean()
console.log(typeof bool1); //output = boolean

let obj2 = object()
console.log(typeof obj2); //output = object


let obj ={name:"venu",age:20};
console.log(typeof obj); //output = object
console.log(typeof obj.name); //ouput = string
console.log(typeof obj.age); //output = number

let arr=[12,23,34]
console.log(typeof arr); //output = object


//Actiity 4 :Reassigning Variable
//Task-5:-
let init="Good Morning"
console.log(init); //output = Good Morning
init="Good Afternoon"
console.log(init); //output = Good Afternoon

//Activity 5 :- Understanding const
//Task-6:
const inv=String("chai Code")
console.log(inv);
inv="chai biscuit"
console.log(inv); //output = TypeError: Assignment to constant variable


//Feature request
//question 2

// In the declaration of variable using let keyword wa can reassign the value as many as times

let initialvalue = "Good morning every one"
console.log(initialvalue);

//reassigning the value in the same variable
initialvalue = "Good Afternoon every one"
console.log(initialvalue);

// In the declaration of variable using const keyword we cannot reassign the value of that variable many times 
//Once a variable is declared with const, its value cannot be reassigned.
const inv1=String("chai Code")
console.log(inv1);
inv1="chai biscuit"
console.log(inv1); //output = TypeError: Assignment to constant variable