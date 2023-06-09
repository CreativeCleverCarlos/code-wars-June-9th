/**
 Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
**/

 function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length; //the ||[] is the 'or' operator that returns a value of 0 if there is no a,e,i,o,u
  }

  console.log(getCount('Hello thur'))