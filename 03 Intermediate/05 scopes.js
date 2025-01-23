var name = "Ganesh";

console.log("Line 3"+name);

function sayName(){
    // var name="Mr. G";
    sayNameTwo()
    console.log("line 6",name);
    function sayNameTwo(){
        var name="mr .H";
        // name="no"//affect name var from outer fun not global
        console.log("Line num:10",name);
    }
}
sayName()
console.log(name);

