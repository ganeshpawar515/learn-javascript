const names = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon"]

// for(const n of names){
//     console.log(n);
// }

const symbols={
    yt:"Youtube",
    ig:"Instagram",
    fb:"Facebook",
    lco:"LearnCodeOnline.in"
}

for(const n in symbols){
    console.log(`key is ${n} and value is ${symbols[n]}`);
}

