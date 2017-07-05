/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE

function letterCount(word){

  //new object to store letters and counts
  var output = {};

  //new variable for the word after it's split into individual letters
  var stringArr = word.split('');

  //for each letter of the array, run the following function
  stringArr.forEach(function(x) {
    //if the output object already contains the letter
    if (output[x]) {
      //add 1 to the letter count
      output[x] += 1;
    //if the letter has not yet been added, add the letter as a new key with a value of 1
    } else {
      output[x] = 1;
    }
  });
  // After you iterate through the entire word array, return the object
  return output;
}
