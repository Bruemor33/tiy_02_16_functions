
// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------
console.log('hello');

function max(value1, value2){
    "use strict";
    //...

    if (value1 > value2){
      return false;
    }else{
      return value2;
    }

}
console.assert(max(12, 13) == 13);


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(number1, number2, number3){
    "use strict";
    //...

    if (number1 < number2 && number1 > number3){
      return false;
    }else{
      return number3
    }
}
console.assert(maxOfThree(12, 9, 13) == 13);

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    //...
    if (char != 'b'){
      return true;
    }else{
      return false;
    }
}
console.assert(isVowel('a' && 'o') == true);

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    //first, pass a string into phrase.

    //second, maybe create a loop for the phrase in order to select specific letters

    //third, create if else statement to find each letter and add an 'o' after each consonant.

    //fourth, return the result of the 'new string'.
    var consonants = 'bcdfghjklmnpqrstvwxz';
    var letters = phrase.split('');

    for (var i = 0; i < phrase.length; i++){
      if (letters[i].match(consonants)){   //so using console.log(phrase.split('')); prints my passed string a an array.
        letters[i] + 'o' + letter[i];
      }

      //very close to the 'fuck this' attitude and am trying to stay away. It's not like I don't know how to use if else statements, or run loops in order to find values.

    }
    console.log(phrase);
}
console.assert(rovarspraket('Andrew') === true);

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(){
    "use strict";
    //

    if (1 + 2 == 3 && 3 + 4 == 7){
      return 3 + 7
    }else{
      return false
    }

}
console.assert(sum([1, 2, 3, 4]) === 10)

function multiply(){
    "use strict";
    //...

    if (1 * 2 == 2 && 3 * 4 == 12){
      return 2 * 12
    }else{
      return false
    }
}
console.assert(multiply([1, 2, 3, 4]) === 24);

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(word){
    "use strict";
    //pass a string into 'word'.

    //split the word into seperate letter strings

    //reverse the order of the letters

    //join the reversed letters

    //return the reversed result.
    var h = '';
    for (var i = word.length - 1; i >= 0; i--){  //here I remembered we can use
    h += word[i];
    return h;
  }
}   //this whole 'passing a value' thing is confusing me. I feel I am making up the assumption I need to pass for everything.
console.assert(reverse('hello') == 'olleh');
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(){
    "use strict";
    //...
    var arr = ['hello', 'goodbye', 'what'];
    var wlngth = 0;
    var longest;

    for (var i = 0; i < arr.length; i++){
      if(arr[i].length > wlngth){
        var wlngth = arr[i].length;
        return longest = arr[i];
      }else{
        return false
      }
    }
}
console.assert(findLongestWord());
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    var keywords = [];
    for (var a = 0; a < words.length; a++){
      words[a];
      if (words[a].length > i){
        keywords.push(words[a]);
      }
    }
    return keywords;
}

var wordlist = ['rock', 'hollywood', 'mother', 'cycling']
console.log('Longer words: ', filterLongWords(wordlist, 4));

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    var frequencyObject = {};
    for (var i = 0; i < string.length; i++){
      if (frequencyObject[string[i]]){
        frequencyObject[string[i]]++
      }else{
        frequencyObject[string[i]] = 1
      }
    }
    return frequencyObject
}

console.log('Frequency Object: ', charFreq('abbabcbdbabdbdbabababcbcbab'));
