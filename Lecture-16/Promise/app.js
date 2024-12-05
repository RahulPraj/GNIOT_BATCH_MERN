let promise = new Promise(function(resolve, reject){

    console.log("data ka wait ho raha hai");
    setTimeout(function(){
        // let data  = 'mai hun doremon';
        let err = "nhi mila kuch";
        // resolve(data);
        reject(err);
    },4000)
});

promise.then(function(data){
    console.log(data);

}).catch(function(err){
    console.log(err);
})