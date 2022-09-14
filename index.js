// //challenge 1 ..  reverse a string .
// //return a string in reverseNumber.
// function reverseString(str) {
// 	return str.split("").reverse().join("");

// ////////////////////

// let revString = "";
// for (let i = str.lenght - 1; i >= 0; i--) {
// 	//	revString = revString + str[i];
// 	// console.log(i);
// }
// return revString;

// /////////////////

// let revString = "";
// for (let i = 0; i <= str.length - 1; i++) {
// 	revString = str[i] + revString;
// }
// return revString;

// //////////////////////

// let revString = "";
// for (let char of str) {
// 	revString = char + revString;
// }
// return revString;

// //////////////////////

// let revString = "";
// str.split("").forEach((char) => {
// 	revString = char + revString;
// });
// return revString;

// ////////////////////////////

// 	return str.split("").reduce((revString, char) => char + revString, "");

// const output = reverseString("hello");
// }

////////////////////////////////////////////////////
////////////////////////////////////////////////////

// challenge 2   validate a palindrome and return true or false.

// function isPalindrome(str) {
// 	const revString = str.split('').reverse().join('')
// 	return revString === str
// }

// //  call function
// const output = isPalindrome('madam')

// console.log(output)

////////////////////////////////////////////////

// //
// // challenge 3 reverse an integer
// function reverseInt(int) {
// 	const revString = int.toString().split("").reverse().join("");
// 	return parseInt(revString) * Math.sign(int);
// }

// const output = reverseInt(-17893);

//////////////////////////////////////////////////

// challenge 4 CAPITALIZE LETTER

// function capitalaizeLetters(str) {
// 	const strArr = str.toLowerCase().split(" ");

// 	for (let i = 0; i < strArr.length; i++) {
// 		strArr[i] =
// 			strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
// 	}
// 	return strArr.join(" ");
// }
////////////////////////

// function capitalaizeLetters(str) {
// 	return str
// 		.toLowerCase()
// 		.split(" ")
// 		.map((word) => word[0].toUpperCase() + word.substr(1))
// 		.join(" ");
// }
///////////////////////

// function capitalaizeLetters(str) {
// 	return str.replace(/\b[a-z]/gi, function (char) {
// 		return char.toUpperCase();
// 	});
// }
///////////////////////////////////////////////

// challenge 5 : maxCharecter
// return the charecter that is most Comment

// function maxCharecter(str) {
// 	const charMap = {};
// 	let maxNum = 0;
// 	let maxChar = "";

// 	str.split("").forEach(function (char) {
// 		if (charMap[char]) {
// 			charMap[char]++;
// 		} else {
// 			charMap[char] = 1;
// 		}
// 	});
// 	for (let char in charMap) {
// 		if (charMap[char] > maxNum) {
// 			maxNum = charMap[char];
// 			maxChar = char;
// 		}
// 	}

// 	return maxChar;
// }
/////////////////////////////
/////////////////////////////
// challenge 6 fizzBuzz

// function fizzBuzz(num) {
// 	for (let i = 1; i <= num; i++) {
// 		if (i % 15 === 0) {
// 			console.log("FizzBuzz");
// 		} else if (i % 3 === 0) {
// 			console.log("Fizz");
// 		} else if (i % 5 === 0) {
// 			console.log("Buzz");
// 		} else {
// 			console.log(i);
// 		}
// 	}
// }

// const output = fizzBuzz(100);
// console.log(output)
/////////////////////////////////////

// // CHALLENGE 7 :  LONGEST WORD
// // RETURN THE LONGEST WORD OF A STRING
// // if more than one the put into an Array

// function longestWord(sen) {
// 	// create a filttered array
// 	const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

// 	// sort by length
// 	const sorted = wordArr.sort((a, b) => b.length - a.length);

// 	// if multiple word put into array
// 	const longestWordArr = sorted.filter(
// 		(word) => word.length === sorted[0].length
// 	);

// 	// check if more than one word in the Array
// 	if (longestWordArr.length === 1) {
// 		// return the word
// 		return longestWordArr[0];
// 	} else {
// 		return longestWordArr;
// 	}
// }
// const output = longestWord("Hello there, my name is Caeser");

// console.log(output);

// //////////////////////////////////////////////
// //////////////////////////////////////////////

// challenge 8 : array chunking
// split an array into chunked array of a specific length
// ex chunkedArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]

// function chunkedArray(arr, len) {
// 	/////   SOLUTION 1
// 	// initilaize chunked array
// 	const chunkedArr = [];
// 	// set index for the loop
// 	let i = 0;
// 	// loop while index is less than the array length
// 	while (i < arr.length) {
// 		//slice out from the index to the index + the chunk length and
// 		// push to the chunked array
// 		chunkedArr.push(arr.slice(i, i + len));
// 		// increment by the chunk length
// 		i += len;
// 	}
// 	return chunkedArr;
// }
// const output = chunkedArray([1, 2, 3, 4, 5, 6, 7], 3);
// console.log(output);

/////////////
////  SOLUTION 2
// function chunkedArray(arr, len) {
// 	// init the chunked arr
// 	const chunkedArr = [];
// 	// loop throught the original array
// 	arr.forEach(function (val) {
// 		//get the last element(array) in the chunked array
// 		const last = chunkedArr[chunkedArr.length - 1];
// 		// check if there is a last and if the last length is equal to the chunked length parameter
// 		if (!last || last.length === len) {
// 			chunkedArr.push([val]);
// 		} else {
// 			last.push(val);
// 		}
// 	});
// 	return chunkedArr;
// }

// const output = chunkedArray([1, 2, 3, 4, 5, 6, 7], 3);
// console.log(output);

////////////////////////////////////////
////////////////////////////////////////

// CHALLANGE 9: FLATTEN ARRAY
// FLATTEN AN ARRAY OF ARRAYS TO A SINGLE ARRAY

// function flattenArray(arrays) {
// 	///// SOLUTION 1
// 	return arrays.reduce(function (a, b) {
// 		// a is the starting point(first array)  and  b is the iteration
// 		return a.concat(b);
// 	});
// }

// const output = flattenArray([
// 	[1, 2],
// 	[3, 4],
// ]);
// console.log(output);
////  arrow function   return arrays.reduce((a, b) => a.concat(b));
///////////////////
////// SOLUTION 2

// function flattenArray(arrays) {
// 	return [].concat.apply([], arrays);
// }

// const output = flattenArray([
// 	[1, 2],
// 	[3, 4],
// ]);
// console.log(output);

////// SOLUTION 3

// function flattenArray(arrays) {
// 	return [].concat(...arrays);
// }
// const output = flattenArray([
// 	[1, 2],
// 	[3, 4],
// ]);

// console.log(output);

////////////////////////////////////////
////////////

////CHALLENGE 10: ANAGRAM
/// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
/// For example, the word anagram itself can be rearranged into nag a ram, also the word binary into brainy and the word adobe into abode.
// return true or false

// function isAnagram(str1, str2) {
// 	return formatStr(str1) === formatStr(str2);
// }

// // creating a helper function
// function formatStr(str) {
// 	return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// }

// const output = isAnagram("elbow", "below#");
// console.log(output);

///////////////////////////////////////////////

// CHALLENGE 11: LETTER CHANGE
// CHANGE EVERY LETTER OF THE STRING TO THE ONE THAT FOLLOWS
//  IT IN THE ALPHABET AND CAPITALIZE THE VOWELS
//    z should turn to a
//  ex. 'hello there' === 'Ifmmp UIfsf'

// function letterChange(str) {
// 	let newStr = str.toLowerCase().replace(/[a-z]/gi, function (char) {
// 		if (char === "z") {
// 			return "a";
// 		} else {
// 			return String.fromCharCode(char.charCodeAt() + 1);
// 		}
// 	});
// 	newStr = newStr.replace(/a|e|i|o|u/gi, function (vowel) {
// 		return vowel.toUpperCase();
// 	});
// 	return newStr;
// }

// const output = letterChange("hello there");

// console.log(output);

/////////////////////////////////////////////////

//// CHALLENGE 12
///// LONGEST WORDS IN THE STRING
//// if there are more than one word return them in an array.

// function longestWords(str) {
// 	let words = str.split(' ');
// 	let size = 0;
// 	let max = [''];

// 	for (let i = 0; i < words.length; i++) {
// 		if (words[i].length >= size) {
// 			size = words[i].length;
// 			if (max[max.length - 1].length < words[i].length) {
// 				max = [];
// 				max.push(words[i]);
// 			} else {
// 				max = [...max, words[i]];
// 			}
// 		}
// 	}

// 	return [...max];
// }

// console.log(longestWords('I woke up early today'));
// console.log(longestWords('I love javascript'));

/// CHALLENGE 13  : ADD ALL NUMBERS
/// RETURN A SUM OF ALL PARAMETERS ENTERED REGARDLES OF THE AMOUNT OF NUMBERS
/// NO ARRAYS .... EXAMPLE  addAll(2, 5, 6, 7) === 20

/// solution 1 using ES5 arguments object (an array like object) and for loop

// function addAll() {
// 	var args = Array.prototype.slice.call(arguments);
// 	var sum = 0;
// 	for (let i = 0; i < args.length; i++) {
// 		sum += args[i];
// 	}
// 	return sum;
// }

// console.log(addAll(2, 5, 5, 6, 7));
//////////////////
//// solution 2
///  using  ...rest and forEach loop.
// function addAll(...numbers) {
// 	let sum = 0;
// 	numbers.forEach((num) => (sum += num));
// 	return sum;
// }

// console.log(addAll(2, 5, 5, 6, 7));

/////////////
// solution 3  using ...rest and reduce

// function addAll(...numbers) {
// 	return numbers.reduce((sum, num) => sum + num);
// }
// console.log(addAll(2, 5, 5, 6, 7));

//////////////////////////////////////////////
/// CHALLENGE 14 SUM ALL PRIMES
// pass in a number to loop up to and add all the prime numbers.
// A prime number is a whole number greater than 1 whoes only factors are 1 and itself.
/// EX   sumAllPrime(10) == 17

// function sumAllPrime(num) {
// 	let sum = 0;

// 	function checkForPrime(i) {
// 		for (let x = 2; x < i; x++) {
// 			if (i % x === 0) {
// 				return false;
// 			}
// 		}
// 		return true;
// 	}

// 	for (let i = 2; i <= num; i++) {
// 		if (checkForPrime(i)) {
// 			sum += i;
// 		}
// 	}
// 	return sum;
// }

// console.log(sumAllPrime(10));

///////////////////////////////////////
////////////////////////////////////
/// CHALLENGE 15 : SEEK AND DESTROY

//// remove from the array whatever is in the following arguments.
/// and return left over values in an array.
/// ex  seekAnddestroy([2, 3, 4, 6, 6, 'hello'],2,6)  == [3, 4, 'hello']

/// solution 1  ; using   arguments, indexOf, filter

// function seekAnddestroy(arr) {
// 	const args = Array.from(arguments);

// 	function filterArr(arr) {
// 		// return true if NOT in array
// 		return args.indexOf(arr) === -1;
// 	}
// 	return arr.filter(filterArr);
// }

// console.log(seekAnddestroy([2, 3, 4, 6, 6, "hello"], 2, 6));

////////////////////////////////////////
//// solution 2  using  ...rest, filter and include.

// function seekAnddestroy(arr, ...rest) {
// 	return arr.filter((val) => !rest.includes(val));
// }

// console.log(seekAnddestroy([2, 3, 4, 6, 6, "hello"], 2, 6));

////////////////////////////////////////////////
