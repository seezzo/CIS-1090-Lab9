let numbers = [2, 35, -56, 72, 23, 42, -22, 83, 34, 67, 0, 99, 106, 17];

//Return true if the number is even, and false if it is odd.
//function isEven(number){
    //return (number / 2) == Math.round( number / 2);
//}

//❓ LAB QUESTION 12:
// i used https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
// and https://www.tutorialkart.com/javascript/how-to-filter-odd-numbers-of-array-in-javascript/#:~:text=To%20filter%20odd%20numbers%20of%20an%20integer%20Array%20in%20JavaScript,for%20the%20given%20callback%20function. to help me with this question
let evenValues = numbers.filter((numbers) => numbers % 2 == 0)
console.log (evenValues)