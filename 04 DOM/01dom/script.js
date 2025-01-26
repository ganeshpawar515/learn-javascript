let counter = document.querySelector(".counter");
let followers = document.querySelector(".followers");

let count=1;

setInterval(()=>{
    if(count<1000){
        count++;
        counter.innerHTML=count;
    }
    if(counter.innerText=="1000"){
        counter.innerText=`${counter.innerHTML} followers on instagram`
    }
},1)


