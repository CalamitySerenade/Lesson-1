//Declare variables for width & height & find the area of a rectangle

//Notes:
//Var lets you redeclare and update variables, has function scope
//let does NOT allow redecleration, local scope
//Var will change the value inside the function calls

let width=10;
let height=10;

console.log("The area of the rectangle is: " + width*height);


console.log("Difference between var and let:");
var a=10;
function myName(){
    a=20;
    return a;
}
myName();
console.log("Var value: "+a);

let b=10;
function returnb(){
    let b=20;
    return b;
}
returnb();
console.log("Let value: "+b);

//We will try to ONLY use let from now on