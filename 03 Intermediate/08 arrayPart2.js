var isEven=(element)=>{
    // if(element%2===0){
    //     return true;
    // }
    // return false;
    return element % 2 === 0;
}
// *function isEven(element){
//     return element%2==0?true: false;
// }
// console.log(isEven(21));

// var result=[2,4,5,8].every(isEven)
// var result=[2,4,6,7].every((e)=>{return e % 2 === 0})
// var result=[2,4,6,8].every((e)=>e % 2 === 0)
var result=[2,4,6,8].every((e)=>(e % 2 === 0))
console.log(result);