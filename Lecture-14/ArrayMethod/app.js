
let arr = [10,20,30,40,50]
// for-each()

// arr.forEach(function(item , index){
//     console.log(item*item);
// })

// map

let newArray = arr.map(function(item, index){
    return (item*2);
})

console.log(arr);
console.log(newArray);