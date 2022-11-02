function callMeTwice( aFunction ){
    aFunction();
    aFunction();
}

//❓ LAB QUESTION 6:
callMeTwice(function(){
    console.log("Hello");
});

//❓ LAB QUESTION 7:
callMeTwice( () => console.log("Goodbye") );