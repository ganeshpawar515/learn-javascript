const myMap = new Map();

myMap.set((function(){
         return "1";
     })(),"one")
myMap.set(2,"two")
myMap.set(3,"three")

console.log(myMap.get("1"));

console.log(myMap);
myMap.forEach((value,key)=>(
    console.log(`key is ${key} value is ${value}`)
))
// myMap.clear()
// console.log(myMap);
// console.log(myMap.has(1));
// console.log(myMap.has("1"));

const obj = {
    1:"one",
    2:"two"
}
// console.log(obj);