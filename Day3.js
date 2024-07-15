//Activity 1:If-Else Statements
//Task-1


function checknum(num){
    if(num>0){
        console.log("Positive Number");
    }
    else if(num<0){
        console.log("Negative Number");
    }
    else{
        console.log("Zero");
    }
}
let num=6;
checknum(num);  //positive number


//Task-2

function iseligble(age){
    if(age>=18){
    console.log("Eligible to vote");
}
else{
    console.log("Not Eligible to vote");
}
}
var age=Number(20);
iseligble(age);   // Eligible to vote

//Activity 2:Nested If-Else Statements
//Task-3


function great(a,b,c){
    if(a>b){
    if(a>c){
        console.log("A is greater");
    }
    else{
        console.log("C is greater");
    }
}
else{
    if(b>c){
        console.log("B is greater");
    }
    else{
        console.log("C is greater");
    }
}
}
let a=Number(12);
let b=Number(13);
let c=Number(14);
great(a,b,c); //C is greater

//Activity 3:witch Case
//Task-4
function getDayName(daynum){
   
    switch(daynum) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number");
            break;

    }
}
let daynum=6;
getDayName(daynum); //saturday



//new Date().getDay() -> is used to get current original day like if monday-1,Tuesday-2...etc

//Task-5

function getGrade(marks){
    switch(true){
        case (marks>=90):
            console.log("A");
            break;
        case ( marks>=80):
            console.log("B");
            break;
        case (marks>=60):
            console.log("C");
            break;
        case ( marks>=40):
            console.log("D");
            break;
        case (marks<40):
            console.log("F");
            break;
        default:
            return "Invalid score";
            break;
        
    }
}
let marks=98; 
getGrade(marks);  //A


//Activity 4: Conditional (Ternary) Operator
//Task-6
let a=10;
let res=(a%2==0)?"Even":"Odd";
console.log(res); //output = Even

//Activity 5: Combining Conditions
//Task-7

function isleap(year){
    if((year % 4 == 0 && year % 100 != 0)||(year % 400 == 0)){
        console.log(year + "is a leap year");
    }
    else{
        console.log(year + " is not a leap year");
    }

}
let year=1800;
isleap(year);   //1800 is not a leap year
