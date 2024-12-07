// function sum(){

//     console.log("sum hun mai");
// }
// console.log(sum()); 
// undefined;

// --------------

// let p1 = new function(){

// }
// console.log(p1);
// empty object

// -------------
// async function fun() {
//     await new Promise(function(resolve, reject){
//         console.log("wait karo 3sec ka promise complete hoga");
//         setTimeout(function(){
//             console.log("hn bhai kam hogya");
//             resolve();
//         },3000)
    
//     })

//    await new Promise(function(resolve, reject){
//         console.log("wait karo 2sec me promise full fill krdunga");
//         setTimeout(function(){
//             console.log("hogya kam 2sec lagye");
//             resolve();
//         },2000)
//    })

//    console.log("dono kam hogye");
// }

// console.log(fun());


// data------
// async function  movie(a,b) {

//     console.log(a);
//     console.log("wait data arha hai");
//     let data  = await fetch('https://api.tvmaze.com/search/shows?q=girls');
//     console.log(data);
//     console.log("data mil gaya");
//     console.log(b);
    
// }

// movie(10,20);