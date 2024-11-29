let person = {
    naam:"rahul",
    age:25,
    favColor:"white"
}

// console.log(person);
// console.log(person.naam);
// console.log(person[age]);
// console.log(person["age"]);

person.naam = "Rahul";
// console.log(person);
console.log(person.naam);

person.gender = "male";
// console.log(person);

// delete
delete person.age;
console.log(person)