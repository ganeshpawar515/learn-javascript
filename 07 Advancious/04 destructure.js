const number=[1,2,3,4]
const [_,b,c,d]=number;

// console.log(typeof number);
// console.log(typeof a);

console.log(_);
console.log(b);
console.log(c);
console.log(d);

const person = {name:"Ganesh", age:24}
console.log(typeof person);
console.log(person);
let {name:fullName,age}=person//renaming name to fullName order doesn't matter only destructured variables availaible use let to see errors
// let name = person.name;
console.log(fullName);


