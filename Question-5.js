function callMeTwice( aFunction ){
    aFunction();
    aFunction();
}

function hello(){
    console.log("Hello");
}

function goodbye(){
    console.log("Goodbye");
}

callMeTwice( hello );
callMeTwice( goodbye );