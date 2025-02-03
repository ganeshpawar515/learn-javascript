var num=1_00_000
console.log(num);

//??
function cartTotal(value){
    value ??=0;
    console.log("total is: ",value);
}

cartTotal()
cartTotal(2)

//Promise.race([]) Promise.any([])
const rejectMe = new Promise((_,reject)=>{reject("Path issue")})
const resolveMe = new Promise((resolve,_)=>{resolve("operation success")})

// Promise.any([rejectMe,resolveMe,rejectMe])
Promise.race([rejectMe,resolveMe,rejectMe])
.then(()=>{
    console.log("handle resolve");
})
.catch(()=>{
    console.log("rejected");
})

const str="Do You USe Google or bing and Google"
const newSte=str.replaceAll("Google","Yahoo")
console.log(newSte);