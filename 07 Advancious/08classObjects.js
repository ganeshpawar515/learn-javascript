// import User from "./07classjs"

const User = require("./07classjs");

const ganesh = new User("Ganesh","ganesh@ai.Ais")

ganesh.enrollCourse("Python Bootcamp")
ganesh.enrollCourse("Django Bootcamp")
console.log(ganesh.getCourseList());
console.log(ganesh.getInfo());

let courses = ganesh.getCourseList()
courses.forEach((e)=>(
    console.log(e)
))

