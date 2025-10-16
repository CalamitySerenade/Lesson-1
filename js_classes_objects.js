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

//Question 1.
class Car{
    constructor(make,model,year,color){
        this.make=make;
        this.model=model;
        this.year=year;
        this.color=color
    }
    getDescription(){
        return this.color+" "+this.year+" "+this.make+" "+this.model;
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


//Question 4. 
class Book{
    constructor(String title, String author, int pages){
        this.title=title;
        this.author=author;
        this.pages=pages;
    }
    function listBooks(arr){
    for (let i=0;i<arr.length;i++){
            const book=arr[i];
            console.log(book.title+" by "+book.author);
        }
    };
};

const library = [
  new Book("1984", "George Orwell", 328),
  new Book("The Hobbit", "J.R.R. Tolkien", 310),
  new Book("Dune", "Frank Herbert", 412)
];

listBooks(library);

//Question 5.
class User{
    #password=" ";
    constructor(String name){
        this.name=name;
    }
    setPassword(password){
        this.password=password;
    }
    checkPassowrd(password){
        this.password=password;
    }
};

const u1 = new User("azahar");
u1.setPassword("abc123");
console.log(u1.checkPassword("abc123")); // "Access granted"
console.log(u1.checkPassword("wrong")); // "Access denied"
