
// let arr = [10,20,30,40,50]
// for-each()

// arr.forEach(function(item , index){
//     console.log(item*item);
// })

// map

// let newArray = arr.map(function(item, index){
//     return (item*2);
// })

// console.log(arr);
// console.log(newArray);


// filter()

// let arr1 = [1,2,3,4,5,6,7,8,9];

// let newArray1 = arr1.filter(function(item,index){

//     if(item >= 5){
//         // console.log(index);
//          return true;
//     }
//     else{
//         false
//     }
// })
// console.log(arr1);
// console.log(newArray1);

//reduce()

let arr1 = [1,2,3,4,5,6,7,8,9];

const sum = arr1.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
},0)

console.log(arr1);
console.log(sum);