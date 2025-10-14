//write 5 questions from before using arrow functions
//Question 1. Area
calculateRectangle=(width,height)=>width*height;
console.log(calculateRectangle(5,10));

calculateCicle=(radius)=>{
    if(radius<0){
        return "invalid input"
    }else{
        return Math.PI*Math.pow(radius,2);
    }
}

//Question 2. grades
gradeCategory=(score)=>{
    if((score<0)||(score>100)){
        console.log("Invalid Input");
    }else{
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
}

//Question 3. Vowels

countVowels=(word)=>{
    let count=0;
    for(let i=0; i<word.length();i++){
        if((word[i]='A')||(word[i]='E')||(word[i]='I')||(word[i]='O')||(word[i]='U')||(word[i]='a')||(word[i]='e')||(word[i]='i')||(word[i]='o')||(word[i]='u')){
            count+1;
        }
    }
    return count;
}
console.log(doubleNumbers("Hello"));


//Question 4. Array double
let array=[1,2,3,4,5];
doubleNumbers=(numbers)=>{
    let newArr=new Array(numbers.length);
    for(let j=0;j<numbers.length;j++){
        newArr[j]=numbers[j]*2;
    }
    return newArr;
}

console.log(doubleNumbers(array));

fahrenheitToCelsius=(f)=>((f-32)*5/9);

describeTemperature=(f)=>{
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
