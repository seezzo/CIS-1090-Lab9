//A global variable. You know this!
let score = 0;

//This function adds some points to the
//score, and then prints it.
function addScore(points){
    score = score + points;
    console.log("Added", points, "points, the new score is", score);
}

//The bind function creates a new function and returns it.
//That new function has fewer parameters, because some of
//it's parameters are BOUND to the values provided.

//AddOne is the addScore function, with the points
//parameter bound to the value one.
let addOne = addScore.bind(null, 1);

//AddTwo is the addScore function, with the points
//parameter bound to the value two.
let addTwo = addScore.bind(null, 2);

//Ditto five
let addFive = addScore.bind(null, 5);

//TRY CALLING THESE FUNCTIONS HERE...
//I'll do one for you
addTwo();

//IF we were in a web browser, you could do something like this:
// pig.addEventListener('click', addScore.bind(null, 3) );