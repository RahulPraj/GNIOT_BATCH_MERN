let arr = [10,20,30,40];

// for-of
for(let item of arr ){
    console.log(item*item);
}

let obj = {
    first:"rahul",
    last: "prajapati",
    age : 25,
    gender : "male"

}

for(let item in obj){
    console.log(item);
    // console.log(obj.item);
    console.log(obj[item]);
}