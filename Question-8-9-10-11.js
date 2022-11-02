import colors from 'colors';
import dictionary from './dictionary.js';

console.log(dictionary);
const text = "The quick brown fox jermps over the lazy dog";

function lowercase(word){
    //This is a function Strings have!
    return word.toLowerCase();
}

function spelledCorrectly(word){
    //This is a function arrays have!
    //You didn't really need to write your
    //own linear search, Sorry not sorry!
    return dictionary.includes(word);
}

let words = text.split(" ");
//❓ LAB QUESTION 8:

words = words.map(lowercase);
//❓ LAB QUESTION 9:

words = words.map( function(word){
    if ( spelledCorrectly(word) ){
        return word;
    } else {
        return word.red;
    }
});
//❓ LAB QUESTION 10:


let result = words.join();
//❓ LAB QUESTION 11:
console.log(result);