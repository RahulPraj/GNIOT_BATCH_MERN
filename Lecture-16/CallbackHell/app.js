function step1(cb){
    console.log("selecting image");
    setTimeout(function(){
        console.log("image selected");
        // return('image selected');
        cb('image selected');
    },4000)
}

function step2(image,cb){
    console.log(`applying filter to ${image}`);
    setTimeout(function(){
        console.log(`applied the filter to the ${image}`);
        // return('filtered image');
        cb('filtered image');
    },2000)
    
}

function step3(filter,cb){
    console.log(`appliying caption to the ${filter}`);
    setTimeout(function(){
        console.log(`caption applied to thw ${filter}`);
        // return ('final image');
        cb('final image');
    },3000)
}

function step4(final){
    console.log(`uploading the ${final}`);
    setTimeout(function(){
        console.log(' image uploaded');
    },4000)
}

step1(function(image){
    step2(image,function(filter){
        step3(filter,function(final){
            step4(final);
        });
    });
})