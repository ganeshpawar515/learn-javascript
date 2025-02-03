const student={
    age:30,
    name:{
        firstName:"Ganesh",
        lastName:"Pawar"
    },
}
student.age=19;

console.log(student.age);
Object.freeze(student)//to get const behavior of object

student.age=16
console.log(student.age);

// Object.freeze(student.name)

student.name.firstName="not Ganesh"
console.log(student.name);