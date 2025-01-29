
function doAddition(x){
    return function(y){
        return x+y;
    }
}
console.log(doAddition(5)(4))
// var add5=doAddition(5);
// console.log(add5(10));









// function outerFunction(){
//     console.log("outer");
//     let count=0;
//     return function(){
//         console.log("inner");
//         count++;
//         console.log(count);
//     }
// }

// var counter=outerFunction();
// counter();
// counter();
// counter();
