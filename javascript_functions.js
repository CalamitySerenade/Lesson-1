function calculateRectangleArea(a,b){
    if((a<0) || (b<0)){
        return("Invalid Input");
    }else{
        return a*b;
    }
}

function calculateCircleArea(r){
    if(r<0){
        return("Invalid Input");
    }else{
        return Math.PI*Math.pow(r,2);
    }
}

console.log(calculateRectangleArea(1,-1));

function gradeCategory(score){
    if((score<0)||(score>100)){
        console.log("Invalid Input");
    }

    if(score>=90){
        return("A");
    }else if((score<=89)&&(score>=80)){
        return("B");
    }else if((score<=79)&&(score>=70)){
        return("C");
    }else if((score<=69)&&(score>=60)){
        return("D");
    }else{
        return("F");
    }
}
console.log(gradeCategory(90));

function countVowels(word){
    let count=0;
    for(let i=0; i<word.length();i++){
        if((word[i]='A')||(word[i]='E')||(word[i]='I')||(word[i]='O')||(word[i]='U')||(word[i]='a')||(word[i]='e')||(word[i]='i')||(word[i]='o')||(word[i]='u')){
            count++;
        }
    }
    return count;
}
console.log(doubleNumbers("Hello"));


let array=[1,2,3,4,5];
function doubleNumbers(numbers){
    let newArr=new Array(numbers.length);
    for(let j=0;j<numbers.length;j++){
        newArr[j]=numbers[j]*2;
    }
    return newArr;
}

console.log(doubleNumbers(array));

function fahrenheitToCelsius(f){
    let c=(f-32)*5/9;
    return c;
}

function describeTemperature(f){
    let c=fahrenheitToCelsius(f);
    if(c<0){
        return "Freezing!";
    }else if((c>=0)&&(c<=20)){
        return "Cold";
    }else if((c>=21)&&(c<=30)){
        return "Warm";
    }else{
        return "Hot";
    }
}

console.log(describeTemperature(31));

//Note: JS does not support method overloading or overriding. Anytime you rewrite a function the old function is omitted from memory, just like a variable
//JS functions can be assigned in a variable