//task-1: Write a program to check if it is raining outside, if so: print "Take an umbrella" to the console, otherwise: "Enjoy your day"

function isRaining(isRaining){
    if(isRaining==true){
        return("Take an umbrella!");
    }else{
        return("Enjoy your day!")
    }
}
//Prints first case
console.log(isRaining(true));
//Prints second case
console.log(isRaining(false));

//Ask a user their age, if they are 18 or older: "You are eligible to vote" otherwise: "You are not eligible to vote"

function votingEligibility(age){
    if(age>=18){
        return("You are eligible to vote!");
    }else{
        return("You are not eligible to vote!");
    }
}
//Prints first case
    console.log(votingEligibility(18));
//Prints second case
    console.log(votingEligibility(17));