// case -1
// function a(b){
//     console.log("inside a");
//     b();
// }

// function b(){
//     console.log("inside b");
// }

// a(b);
// a(function b(){
//     console.log("inside b");
// });


// case-2

function a(){

    console.log("inside a");
    function b(){
        console.log("inside b");
    }
    return b;
}

let ans = a();
// ans();
// b(); error
// console.log(ans);
