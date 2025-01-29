function fetchRole(roleID){
    switch(roleID){
        case 1:
            return "Admin"
        case 2:
            return "Moderator"
        case 3:
            return "Special User"
        default:
            return "user"
    }
}

var run=true;
while(run){
    let input=1
}
console.log(fetchRole(1));
console.log(fetchRole(2));
console.log(fetchRole(3));
console.log(fetchRole(4));