// Activity 1 : Arithmetic Operations
//Task-1

let num1=Number(42);
let num2=Number(24);
let res=num1+num2;
console.log(res);  //output = 66

//Task-2

let res1=num1-num2;
console.log(res1); //output = 18

//Task-3
let a=Number(42);
let b=Number(24);
let r=a*b;
console.log(r); //output = 1008

//Task-4
let c=Number(42);
let d=Number(24);
let re=c/d;
console.log(re); //output=1.75

//Task-5
let first=Number(67)
let second=Number(34);
let result=first%second;
console.log(result); //output=33

//Actiity 2 : Assignment Operators
//Task-6
let num=Number(6);
num+=4;
console.log(num); //output = 10

//task-7
let n=Number(8);
n-=4;
console.log(n); //output = 4

//Activity 3 : Comparison Operators
//Task-8
let n1=Number(6)
let n2=Number(8);
console.log(n1>n2); //output = false
console.log(n1<n2); //output = true

//Task-9
let n3=Number(6);
let n4=Number(6);
console.log(n3>=n4); //output=true
console.log(n3<=n4); //output = true

//task-10
let n5=Number(6);
let n6=Number(8);
console.log(n5==n6); //output = false
console.log(n5===n6); //output = false

console.log(0===false); //false
console.log(0==false); //true
console.log(1=="1"); //true
console.log(1==="1"); //false
////triple equals means equality without type conversion
////in == the value will be compares after type conversion but in === only the value without conversion will be compared

//Activity 4:Logical Operators
//Task-11
//task-12
//task-13

let a1=Number(46)
let a2=Number(-1);
console.log((a1>0)&&(a2>0)); //false  //both the conditions shold be true
console.log((a1>0)||(a2>0)); //true   //any one condition should be true
console.log(!(a1>0)); //false

//Activity 5 :Ternary Operators

//Task-14
let a3=Number(46);
console.log(a3>0?"positive":"negative"); //positive


