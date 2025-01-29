var User = function(firstName, courseCount){
    this.firstName=firstName;
    this.courseCount=courseCount;
    this.getCourseCount = function(){
        console.log(`course count is ${this.courseCount}`);
    }

};
User.prototype.getFirstname = function(){
    console.log(`Your firstname is : ${this.firstName}`);
}
var ganesh = new User("Ganesh",2);
ganesh.getCourseCount()
ganesh.getFirstname()
// console.log(User);
// ganesh.getCourseCount()
// console.log(typeof ganesh);

var hitesh = new User("Hitesh",1);
hitesh.getCourseCount()

hitesh.getFirstname()





