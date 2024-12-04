
class Person{

    constructor(firstName, lastName , email){
        this.firstName = firstName;
        this.lastName =lastName ;
        this.email = email ; 
    }
    getDetails(){
        console.log(`my name is ${this.firstName} ${this.lastName} and my email is ${this.email}`)
    }
}

// let user = new Person("rahul","prajapati", "rahul@gmail.com")

// console.log(user);
// console.log(user.getDetails());


// extends

class Student extends Person{

    constructor(firstName,lastName,email, rollNo){
        super(firstName, lastName, email)
        this.rollNo = rollNo;
    }
    printDetials(){
        console.log(`my name is ${this.firstName} ${this.lastName} and my email is ${this.email} and roll no ${this.rollNo}`);

    }
}

let user1 = new Student("rahul","prajapati", "rahul@gmail.com",12);

console.log(user1);
user1.printDetials();

