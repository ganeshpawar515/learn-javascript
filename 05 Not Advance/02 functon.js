//IIFE

let num1=5;
let num2=10;

let result=(function(num1){
    console.log(num2);
    addition=num1+num2;
    subtraction=num1-num2;
    division=num1/num2;
    multiplication=num1*num2;
    return `addition: ${addition}
    subtraction: ${subtraction}
    division: ${division}
    multiplication: ${multiplication}
    `;
})(num1);
console.log(result);


// (function(){
//     console.log("I say hello");
//     console.log("I say hello again");
// })();