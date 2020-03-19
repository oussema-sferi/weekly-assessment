//=============================================== 1
//Write a function called percentOf that takes two parameters,
//The function should find out what percentage the first number represents of the second number,
//and returns the result as a string.
//percentOf(5, 10)  ==>  "5 is 50% of 10"
//percentOf(2, 10)  ==>  "2 is 20% of 10"
// Note: please write one or two lines here describing your solution.
function percentOf(num1, num2) {

  var p;

  p = (num1 * 100) / num2;

  return num1 + " is " + p + "% of " + num2;

}

/*Description: i have created a variable p and assigned to it the value which represents what percentage

 represents num1 of num2 then returned the whole string which contains p and a string representing the result*/

//=============================================== 2
//Write a function called pluralize that:
//takes 2 parameters, a noun and a number.
//returns the number with the noun in pluralized form.
//pluralize('cat', 0)  ==>  "0 cats"
//pluralize('cat', 5)  ==>  "5 cats"
//pluralize('cat', 1)  ==>  "1 cat"
// Note: please write one or two lines here describing your solution.
function pluralize(noun, number) {
  
  if(number === 1) {

  	return number + " " + noun;

  }

  return number + " " + noun + "s";

}

/*Description: i used the if statement because there is 2 conditions, the first one,

when the number is equal to 1 so the noun stay as it is without pluralizing it, in the other cases, 

the noun will be pluralized by adding the "s" string at the end of it*/

//=============================================== 3
// write a function called addOne that takes an array of numbers as an input,
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]
// Note: please write one or two lines here describing your solution.
function addOne(array) {
  
  var newarr = [];

  var i = 0;

  while( i < array.length) {

  	newarr[i] = array[i] + 1; 

  	i += 1;

  }

  return newarr;

}

/*Description:  i have created a new empty array. Then i have initialized the counter i to 0

and used a while loop to lookup in every element of the array starting from index 0 then add one to it and 

assign the new value to the element of the same index but in the new array, the while loop will stop after the 

counter reach the last index of the array, then we return the new array as a result */

//=============================================== 4
/*
Write a function that uses console.log to give the following triangle:
#
## 
###
####
#####
######
#######
*/
// Note: please write one or two lines here describing your solution.
function drawTriangle() {

	var triangle = "";

	var i = 0;
  
  while(i < 7) {

  	var j = 0;

		var dash = '';

		while(j <= i) {

			dash = dash + '#';

			j = j + 1;

		}

  	triangle = triangle + dash + '\n';

  	i += 1;

  }

  return triangle;
}

/*Description: so we have a triangle formed of '#', there are 7 lines, starting from 1 # at line 1,

it increment with 1 '#' every line till we reach the line 7. i created 2 while loops, one which helps us to 

create the number of '#' in every single line and the number of # increment when we move to a new line

 and the outer while loop which concatenate the whole lines to reach 7 lines and i used the \n for 

 returning to a new line */

//=============================================== 5
//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0

function countVowels(string) {

	var number;

	if(string.length === 0) {

  	return 0;

  } else if(string[0] === "a" || string[0] === "e" || string[0] === "i" || string[0] === "o" || string[0] === "u") {

	return 1 + countVowels(string.substring(1));

	} 

	return countVowels(string.substring(1));

}

//Good Luck :))

/*Description: at first, we have the stop condition which is after arriving to the last index of the string,

then we put a condition, if the charachter of the first index is equal to one of the vowels then the result will 

increment by 1 and we call the function another time but with a different argument which is the string after 

deleting the first charachter , and it will be repeated till we arrive to the end of the string, same thing

for the last condition, if the charachter of the first index isn't a vowel, we call the function another time

with a different argument but that time without incrementing by 1 */