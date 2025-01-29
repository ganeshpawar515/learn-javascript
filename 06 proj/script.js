const courses =[
    {
        name: "Complete react and js",
        price: "2.3"
    },
    {
        name: "Complete angular and js",
        price: "2.9"
    },
    {
        name: "Complete django and js",
        price: "2.7"
    },
    {
        name: "Complete python and js",
        price: "2.1"
    },
    {
        name: "Django super",
        price: "2.35"
    },
]

// courses.forEach((e)=>(
//     console.log(`name is: ${e.name}
//     price is : ${e.price}
//     `)
// ))

function generateList(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((course)=>{

        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span")
        span.classList.add("float-right")
        const price = document.createTextNode("$ "+course.price)
        span.appendChild(price);   
        li.appendChild(span) 
        ul.append(li)
    });
}

function changeBtn(){
    const btn= document.querySelector(".blue-btn");
    btn.classList.add("btn")
    btn.classList.add("btn-primary")
}
// generateList()
changeBtn()

window.addEventListener("load",generateList)

const buttton = document.querySelector(".sort-btn");
buttton.addEventListener("click",()=>{
    courses.sort((a,b)=>b.price-a.price)
    generateList()
})


