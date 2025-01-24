
var user = {
    firstName : "Ganesh",
    lastName : "Pawar",
    role : "Admin",
    loginCount: 32,
    facebookSignedIn: false,
    courseList : [],
    buyCourse : function (course){
        this.courseList.push(course)
    },
    getCourseCount: function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
    signedInFrom:function (){
        if(this.facebookSignedIn){
            return "signed in from facebook"}
        return "Not signed in from facebook"
    },
    info:function (){
        return `The User ${this.firstName} ${this.lastName} is a ${this.role} with login count of ${this.loginCount} is enrolled in
         ${this.courseList.length} courses which are ${this.courseList} and is `+this.signedInFrom()
    }
};
// courseList=[];
user.buyCourse("Python 3")

// console.log(user.courseList);

// console.log(user.getCourseCount());
user.buyCourse("Javascript")
// console.log(user.getCourseCount());
// console.log(courseList);

console.log(user.info());






