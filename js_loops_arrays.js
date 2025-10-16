//Today's objective is to go over JS for loops, arrays, and for each
// 1. Write a program that uses forEach() to print each number in an array on a new line.
const numbers=[10,20,30,40,50];
for(let i=0;i<numbers.length;i++){
  console.log("Index "+ i +":" +numbers[i]);
}

//2.  Write a function sumArray(arr) that returns the total sum of all elements in an array using forEach().
function sumArray(arr){
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum;
}
console.log(sumArray([2,4,6]));

//3. Write a function squareNumbers(arr) that returns a new array where each number is squared.
function squareNumbers(arr){
  const newArr=new Array(arr.length);
  for(let i=0;i<arr.length;i++){
    newArr[i]=Math.pow(arr[i],2);
  }
  return newArr; 
}
console.log(squareNumbers([1, 2, 3]));

//4. Write a function getEvenNumbers(arr) that returns a new array containing only the even numbers.
function getEvenNumbers(arr){
  const newEven=new Array(arr.length);
  for(let i=0;i<arr.length;i++){
    if(arr[i}%2=0){
      newEven[i]=arr[i];
    }
  }
  return newArr;
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

//5.  Given an array of student objects, write a function printStudentGrades(students) that prints "Name: [name], Grade: [grade]" for each student.
const students = [
  { name: "Alex", grade: 90 },
  { name: "Bella", grade: 82 },
  { name: "Carlos", grade: 95 }
];
fuction printStudentGrades(students){
  for(let i=0;i<students.length,i++){
    console.log(students[i]);
  }
}
