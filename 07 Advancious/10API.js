fetch("https://api.chucknorris.io/jokes/random")
.then(response=>{
    // console.log("API: ",response.json());
    return response.json();
})
.then((data)=>{
    // console.log("API 2 : ",data);
    let joke = data.value;
    console.log("JOKE: ",joke);
})