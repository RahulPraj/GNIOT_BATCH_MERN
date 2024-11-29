let student = {
    naam:"rahul",
    dbms : 70,
    OS : 67,
    dsa : 60,
    web : 80,
    total : function (){
        // return(70 + 67 + 60 + 80);
        return(this.dbms + this.OS + this.dsa + this.web);
    },

    studentName : function (){
        return(`my name is ${this.naam}`);
    }
}

console.log(student);
console.log(student.naam);
// console.log(student.sum());
// console.log(student.total);
// console.log(student.total());
console.log(student.studentName());
