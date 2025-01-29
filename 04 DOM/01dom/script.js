const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const boxes = document.querySelector(".color")

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red));
// console.log(window.getComputedStyle(red).backgroundColor);




const getBGColor=(element)=>{
    // console.log(window.getComputedStyle(element).backgroundColor);
    return window.getComputedStyle(element).backgroundColor;
}

var orangeElementColor = getBGColor(orange);
orange.addEventListener("mouseenter",()=>{
    
    center.style.background=orangeElementColor;
})

var cyanElementColor=getBGColor(cyan);
cyan.addEventListener("mouseenter",()=>{
    center.style.backgroundColor=cyanElementColor;
})

// console.log(getBGColor(pink));

red.addEventListener("mouseenter",(event)=>{
    center.style.backgroundColor=getBGColor(red);
})

violet.addEventListener("mouseenter",(event)=>{
    center.style.backgroundColor=getBGColor(violet);
})

pink.addEventListener("mouseenter",(event)=>{
    center.style.backgroundColor=getBGColor(pink);
})




// let counter = document.querySelector(".counter");
// let followers = document.querySelector(".followers");

// let count=1;

// setInterval(()=>{
//     if(count<1000){
//         count++;
//         counter.innerHTML=count;
//     }
//     if(counter.innerText=="1000"){
//         counter.innerText=`${counter.innerHTML} followers on instagram`
//     }
// },1)


