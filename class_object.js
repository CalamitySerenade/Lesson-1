//What is the basic syntax for writing a JS class?

class ClassName{
    constructor(name, year){
        this.name=name;
        this.year=year;
    }
}


//What is the basic syntax for writing a JS object
const student1 = new ClassName("Example1",2026);
const student2 = {
    name:"Example2",
    year:2021
};
const student3 = new Object({
    name: "Example3",
    year:1991
});

//Lab questions
//Question 1.
class Car{
    constructor(make,model,year,color){
        this.make=make;
        this.model=model;
        this.year=year;
        this.color=color
    }
    getDescription(){
        return this.color +" "+this.year+" "+this.make+" "+this.model;
    }
}
const car1 = new Car("Toyota", "Camry", 2021,"Black");
console.log(car1.getDescription());

//Question 2.
class BankAccount{
    constructor(owner,balance){
        this.owner=owner;
        this.balance=balance;
    }
    deposit(amount){
        this.balance+=amount;
    }
    widthdraw(amount){
        if(amount>this.balance){
            return "Insufficient funds";
        }
        else{
            this.balance-=amount;
        }
    }
    getBalance(){
        return "$"+this.balance;
    }
}
const acc = new BankAccount("Alex", 100);
acc.deposit(50);
acc.widthdraw(30);
console.log(acc.getBalance());

//Question 3.
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return "Hi, I'm "+this.name+", and I'm "+this.age+" years old";
    }
}

class Student extends Person{
    constructor(name,age,grade){
        super(name,age);
        this.grade=grade;
    }
    introduce(){
        return "Hi, I'm "+this.name+", I'm "+this.age+" years old, and I'm in "+this.grade+"th grade.";
    }
}

const s1 = new Student("Maya", 17, "11th");
console.log(s1.introduce());
