let p1 = new Promise(function(resolve, reject){
    console.log("wait karo 3sec ka promise complete hoga");
    setTimeout(function(){
        console.log("hn bhai kam hogya");
        resolve();
    },3000)

})

p1.then(function(){
   return new Promise(function(resolve, reject){
        console.log("wait karo 2sec me promise full fill krdunga");
        setTimeout(function(){
            console.log("hogya kam 2sec lagye");
            resolve();
        },2000)
   })
}).then(function(){
    console.log("dono kam hogye bhai, mai to thak gaya");
}).catch(function(){
    console.log("kuch nhi hua bhai sorry");
})