//Activity 1:- Function Declaration
//Task 1

function evenorodd(n){
    if(n%2==0){
        console.log("even");
    }
    else{
        console.log("Odd");
    }
}
evenorodd(5);

//Task-2
function square(x){
    return x*x;
}
console.log(square(4));

//Activity 2:- Function Expression
//Task-3
const findmax=function(a,b){
    return a>b?a:b;
}
console.log(findmax(5,6));


//Task-4
const str=function(str1,str2){
    return str1+str2;
}
console.log(str("hello","world"));


//Activity 3:- Arrow functions
//Task-5
const add = (a,b)=>{
    return a+b;
}
console.log(add(5,6));

//Task-6
const res =(str,ch) =>  {
     if(str.includes(ch)){
        return true;
     }
     else{
        return false;
     }
}
console.log(res("hello","e"));

//alternative

const result = (str, ch) => str.includes(ch);  // in javascript bydefault includes return boolan value so no need of if else blocks

console.log(result("hello", "e")); // Output: true
console.log(result("hello", "a")); // Output: false

//Activity 4:- Function Parameters and Default values
//Task-7
const prod =(a,b=1)=>{
    return a*b;
}
console.log(prod(5));  //5
console.log(prod(4,5));  //20

//Task-8
const ans=(name,age=20)=>{
    return `${name} is ${age} years old`;
}
console.log(ans("venu"));
console.log(ans("sekhar",21));

//Activity 5:- Higher-Order Functons
//Task-9
//Taking functionns as arguments
const res = (fun,n) => {
    for(let i=0;i<n;i++){
        fun();
    }
}
const sayHello =() => {console.log("hello");}
res(sayHello,5);


//Task-10
const res = (fun1,fun2,n) =>{
    var ans=fun1(n);
    var ans2=fun2(ans);
    return ans2;
}
const square = (n) => {return n*n;}
const cube = (n) => {return n*n*n;}
console.log(res(square,cube,3));