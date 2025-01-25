 console.log(this)

var user={
    firstName:"Ganesh",
    courseCount:4,
    getCourseCount:function (){
        console.log("Line 7 :",this);
        function sayHello(){
            console.log("line 14",this);
        }
        sayHello()
    }
}
user.getCourseCount(); //not regular function call

// function sayHello(){
//     console.log("line 14",this);
// }
// sayHello()//regular function call

// var user ={
//     firstName:"Ganesh",
//     getWord:function (){
//         console.log("word is secrete");
//         console.log(this);
//         return 0;
//     },
//     w:this.getWord()
// }

// user.w