class User{
    constructor(name,email){
        this.name=name
        this.email=email
    }

    #courseList=[];//private now

    getInfo(){
        return {name:this.name, email:this.email}
    }
    enrollCourse(name){
        this.#courseList.push(name);
    }
    getCourseList(){
        return this.#courseList;
    }
    // static login(){
    //     return `You are logged in`
    // }
    login(){
        return `You are logged in`
    }
}

class SubAdmin extends User{
    constructor(name,email){
        super(name,email)
    }
    getAdminInfo(){
        return "I am Sub admin"
    }
    login(){
        return `login for subadmin only `
    }
}


module.exports =User;

// const rock = new User("rock","rock.com")
// console.log(rock.getInfo());
// rock.enrollCourse("Angular bootcamp")
// console.log(rock.getCourseList());
// console.log(rock.courseList);


const tom = new SubAdmin("Ganesh","Ganesh@ganesh.com")
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());

// let Ganesh = new User("Ganesh","Ganesh.ai.ais")

// Ganesh.enrollCourse("Pypy")
// console.log(Ganesh.getCourseList())
// console.log(Ganesh.getInfo());
