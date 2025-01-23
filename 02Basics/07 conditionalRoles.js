var user="admin";

switch(user){
    case "admin":
        console.log("You get full access")
        break;
    case "subadmin":
        console.log("gets acces to create/delete courses")
        break;
    case "testprep":
        console.log("gets acces to create/delete courses")
        break
    case "user":
        console.log("get acccess to consume content")
        break;
    default:
        console.log("Trial user")
        break;
}