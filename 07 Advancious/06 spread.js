// var returnedValue = Math.max(1,5,9,7,2,8);
// console.log(returnedValue);

// var myObj ={};
// Object.assign(myObj,{a:1},{b:5})

// console.log(myObj);



// function someOne(a,b){
//     return a+b;
// }

// var myA=[5,4,1]

// console.log(someOne(...myA));


function sumTwo(num1,num2,...args){
    let sum=0;
    for(let arg of args){
        // console.log("arg is:",arg)
        sum=sum+parseInt(arg)
        // console.log("sum is: ",sum);
    }
    return [num1*num2,sum];
}
console.log(sumTwo(1,2,3,4));
