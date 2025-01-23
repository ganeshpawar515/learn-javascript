var getUserRole=function (name,role){
    switch(role){
        case "admin":
            return `${name} is admin with all access`
        case "subadmin":
            return `${name} is subadmin with access create/delete cources`
        case "testprep":
            return `${name} is testprep with access create/delete cources`
        case "user":
            return `${name} is user to consume content`
        default:
            return `${name} is a trial user`;
            break;

    }
}

console.log(getUserRole("Ganesh","admin"))

var getRole = getUserRole("Sara","user")
console.log(getRole)







// function getUserRole(name,role){
//     if (role=="admin"){
//         return `${name} Have Full access`
//     }
// }

// console.log(getUserRole("Ganesh","admin"))



















