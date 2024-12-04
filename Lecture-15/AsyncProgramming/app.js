// synchronous

// console.log("first")
// console.log("middle");
// console.log("last");


// asynchronous

// console.log("first");

// setTimeout(function(){
//     console.log("middle");
// },4000)

// console.log("last");

// --------------
// console.log("first");

// setTimeout(function(){
//     console.log("run after 4sec");
// },4000)

// setTimeout(function(){
//     console.log("run after 2sec");
// },2000)

// console.log("last");

// ------
// console.log("first");

// setTimeout(function(){
//     console.log("run after 0sec");
// },0)



// console.log("last");

// setInterval()
// let intervalId = setInterval(()=>{

//     console.log("hello , repeat after one second");
// },4000)


// clearInterval

let count = 0;

let countValue = setInterval(()=>{

    count++;
    console.log(`count is : ${count}`);

    if(count == 5){
        clearInterval(countValue);
        console.log("interval stopped");
    }
},1000);


