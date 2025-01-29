const ganesh={
    firstName:"Ganesh",
    lastName:"Pawar",
    role:"Admin",
    courseCount:3,
    getInfo:function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        he is studying ${this.courseCount} courses
        `);
    }
}

const dj = {
    firstName:"Rock",
    lastName:"DJ",
    role:"Sub-Admin",
    courseCount:4,
}

// ganesh.getInfo()
// ganesh.getInfo.bind(dj)();
// var djInfo=ganesh.getInfo.bind(dj);
// djInfo()