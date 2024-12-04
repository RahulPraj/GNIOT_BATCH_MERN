// function person(){
//     this.naam = "rahul";
//     this.email = "rahul@gmail.com";
// }

// let user = new person();
// console.log(user);
// console.log(user.naam);
// console.log(user.email);

// -----------
// custom constructor


function person(naam, mail){
    this.naam = naam;
    this.email = mail;
}

let user  = new person("rahul","rahul@gmail.com");
let user1 = new person("raj", "raj12@gmail.com");

console.log(user);
console.log(user1);