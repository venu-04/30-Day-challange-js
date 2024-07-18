//Activity 1 :- Array Creation  and Access
//Task-1
const arr=[1,2,3,4,5];
console.log(arr);

//Task-2
console.log(arr[0]);
console.log(arr[4]);

//Activity 2: Array Methods
//Task-3
arr.push(9);
console.log(arr);

//Task-4
arr.pop();
console.log(arr);

//Task-5
arr.shift(0);
console.log(arr);

//Task-6
arr.unshift(0);
console.log(arr);

//Activity 3:Array Methods (Intermediate)
//Task-7
let arr1=[1,2,3,4,5]
const res = arr1.map(num=>num*2);
console.log(res);

//Task-8
const ans=arr1.filter(num=>num%2==0);
console.log(ans);

//Task-9
const res1=arr1.reduce((acc,curr) => acc+curr,0);
console.log(res1);

//Activity 4:
//Task-10
const arr2=[1,2,3,4,5,6]
for(let i=0;i<arr2.length;i++){
    console.log(arr2[i]);
}


//Task-11
arr2.forEach(num=>{
    console.log(num);
})

//Activity 5:
//Task-12
const arr3=[[1,2],[3,4],[6,7]];
console.log(arr3);

//Task-13
const a=arr3[0][1];
console.log(a);