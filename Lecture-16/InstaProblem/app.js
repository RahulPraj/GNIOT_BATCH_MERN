// task-1 -> selecting image

function step1(){
    console.log("selecting image");
    setTimeout(function(){
        console.log("image selected");
        return('image selected');
    },4000)
}

function step2(image){
    console.log(`applying filter to ${image}`);
    setTimeout(function(){
        console.log(`applied the filter to the ${image}`);
        return('filtered image');
    },2000)
    
}

function step3(filter){
    console.log(`appliying caption to the ${filter}`);
    setTimeout(function(){
        console.log(`caption applied to thw ${filter}`);
        return ('final image');
    },3000)
}

function step4(final){
    console.log(`uploading the ${final}`);
    setTimeout(function(){
        console.log(' image uploaded');
    },4000)
}

let image = step1();
let filter = step2(image);
let final = step3(filter);
step4(final);