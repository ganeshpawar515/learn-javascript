const number = [1,2,3];
// console.log(typeof number);
// console.log(number);
// console.log(...number); //spread use for copying arrays

//Avoid mutation

// const copy=...number;//mutation occurs as var copy refer to same location
const copy=[...number];//mutation not occur as new copy is created
copy.push(50)
console.log(copy);
console.log(number);
console.log([...copy,...number]);
