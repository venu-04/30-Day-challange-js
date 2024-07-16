// --LOOPs--

//Activity 1:For loop
//Task-1

function printnum(n){
    for(let i=0;i<=n;i++){
        console.log(i);
    }
}
let n=10;
printnum(n);

//Task-2

function table(n1){
    for(let i=1;i<=10;i++){
        console.log(n1+"*" +i +"="+n1*i);
    }
}
let n1=5;
table(n1);

//Activity 2:While loop
//Task-3
function sum(n){
    let sum=0;
    let i=0;
    while(i<=n){
        sum+=i;
        i++;
    }
    console.log("sum of numbers is"+sum);
}
let n=10;
sum(n);

//Task-4
function printrev(n){
    let i=n;
    while(i>0){
        console.log(i);
        i--;
    }
}
let n=10;
printrev(n);

//Activity 3:Do...While Loop

//task-5

function printnum(n){
    let i=1;
    do{
        console.log(i);
        i++;
    }while(i<=5)
}
let n=5;
printnum(n);

//Task-6
function factorial(n){
    let fact=1;
    let i=1;
    do{
        fact*=i;
        i++;    
    }while(i<=n)
        console.log("factorial of number is "+fact);
}
let n=5;
factorial(n);

//Activity 4:Nested Loops

//Task-7
function pattern(n){
    for(let i=0;i<n;i++){
        let line=""
        for(let j=0;j<=i;j++){
            line+="*\t"
        }
        console.log(line);
       
    }
}
let n=5;
pattern(n);

//Activity 5:Loop Control statements
//task-8
function printnumbers(m){
 for(let i=1;i<=m;i++){  
        if(i==5){
            continue;
        }
        console.log(i);
    }
}
   

let m=10;
printnumbers(m);


//task-9
function printnumbers(n){
    for(let i=1;i<=n;i++){
        if(i==7){
            break;
        }
        console.log(i);
    }

}
let n=10;
printnumbers(n);
