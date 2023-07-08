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
////////////////////////////////////////////////

/// CHALLENGE 15 : SORT BY HIGHT
/// some people are standing in a row in a park. there are trees between them which
/// can not be moved. your task is to rearange the people by their height in a non
///descending order without moving the trees.
/// EX. a = [-1, 150, 190, 170, -1, -1, 180, 190]
// sortByHight(a) == [-1, 150, 160, 170, -1, -1, 180, 190];

/// solution 1

// function sortByHight(a) {
// 	const arr1 = [];
// 	const arr2 = [];

// 	a.forEach((val, index) => {
// 		if (val === -1) {
// 			arr1.push(index);
// 		} else {
// 			arr2.push(val);
// 		}
// 	});
// 	// console.log(arr1, arr2);
// 	/// to sort from lowest to highest  (preveus - next) ... or highest to lowest (next - preveus)

// 	const sortArr = arr2.sort((prev, next) => prev - next);
// 	// console.log(sortArr);

// 	arr1.forEach((val, index) => sortArr.splice(arr1[index], 0, -1));
// 	return sortArr;
// }

// const a = [-1, 150, 160, 170, -1, -1, 180, 190];
// console.log(sortByHight(a));

///////  solution 1 refractured

// function sortByHight(a) {
// 	const arr1 = [];
// 	const arr2 = [];

// 	a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));

// 	const sortArr = arr2.sort((prev, next) => prev - next);

// 	arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));
// 	return sortArr;
// }

// const a = [-1, 150, 160, 170, -1, -1, 180, 190];
// console.log(sortByHight(a));

////////////////////////////////////////////////
///////////////////////////////////////////
/// CHALLENGE 16 MISSING LETTERS
//  find the missing letter in the passed letter range and return it.
/// if all letters are present, return undefind.
// ex missingLetters('abce') == 'd'
/// missingLetters(a to z) == undefind.

// function missingLetters(str) {
// 	let compare = str.charCodeAt(0);
// 	let missing;

// 	str.split("").map((char, i) => {
// 		if (str.charCodeAt(i) === compare) {
// 			++compare;
// 		} else {
// 			missing = String.fromCharCode(compare);
// 		}
// 	});
// 	return missing;
// }

// console.log(missingLetters("abce"));

/////////////////////////////////////////////////////////
/// CHALLENG 17 : EVEN AND ODD SUMS
// take in an array and return an array of the sums of even and odd numbers
/// ex  evenOddSums([50, 60, 60, 45, 71]) == [170, 116]
// function evenOddSums(arr) {
// 	let evenSum = 0;
// 	let oddSum = 0;

// 	arr.forEach((num) => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

// 	return [evenSum, oddSum];
// }

// console.log(evenOddSums([50, 60, 60, 45, 71]));

////////////////////////////////////////////////
///// CHALLENGE 18  FIND THE LONGEST WORD IN A STRING
/// solution

// function longestWord(str) {
// 	let words = str.split(" ");
// 	let longest = "";

// 	for (let word of words) {
// 		if (word.length > longest.length) {
// 			longest = word;
// 		}
// 	}
// 	return longest;
// }
// console.log(longestWord("my name is caeser"));

///////////////////////////////////////////
/// CHALLENGE 19 CAPITALIZE THE FIRST LETTER
/// solution 1
// function capitaize(str) {
// 	let newArr = str.toLowerCase().split(" ");
// 	for (let i = 0; i < newArr.length; i++) {
// 		newArr[i] =
// 			newArr[i].substring(0, 1).toUpperCase() + newArr[i].substring(1);
// 	}
// 	return newArr.join(" ");
// }

// console.log(capitaize("caeser al ani"));
///////////
// solution 2
// function capitaize(str) {
// 	let newArr = str
// 		.toLowerCase()
// 		.split(" ")
// 		.map((word) => word[0].toUpperCase().concat(word.substr(1)));
// 	return newArr.join(" ");
// }
// console.log(capitaize("caeser al ani"));
//// solution 3
// function capitaize(str) {
// 	return str.replace(/\b[a-z]/gi, function (char) {
// 		return char.toUpperCase();
// 	});
// }
// console.log(capitaize("caeser al ani"));
////////////////////////////
/// CHALLENGE 20
// MAX CHARECTER IN A STRING
// solution
// function maxChar(str) {
// 	const charMap = {};
// 	let maxNum = 0;
// 	let maxCharr = "";

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
// 			maxCharr = char;
// 		}
// 	}
// 	return maxCharr;
// }

// console.log(maxChar("javascripttt"));

///////////////////////////
///////////////////////////
/// Challenge 21
/// find the math sequence..   (no negetive numbers)
/// artimatic, geometric, or no pattern

// function mathSequences(arr) {
// 	let arith = new Set();
// 	let geo = new Set();

// 	for (let i = 1; i < arr.length; i++) {
// 		let number1 = arr[i] - arr[i - 1];
// 		arith.add(number1);
// 		let number2 = arr[i] / arr[i - 1];
// 		geo.add(number2);
// 	}
// 	if (arith.size === 1) {
// 		return "Arithmatic";
// 	}
// 	if (geo.size === 1) {
// 		return "Geometric";
// 	}
// 	return -1;
// }

// console.log(mathSequences([2, 4, 6, 8]));
// /// 'Arithmatic'
// console.log(mathSequences([3, 9, 27]));
// /// 'Geometric'
// console.log(mathSequences([2, 7, 16, 98]));
// /// -1

////////////////////////////////////////////
////////////////////////////////////////////

/// CHALLENGE 22
//// LONGEST WORDS IN THE STRING
/// if there are more than one word return them in an array.

// function longestWords(str) {
// 	let words = str.split(" ");
// 	let size = 0;
// 	let max = [""];

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
// console.log(longestWords("I woke up early today"));
// console.log(longestWords("I love javascript"));

/////////////////////////////
/////////////////////////////
///  CHALLENGE 23
/// capitalize the first letter
// /// solution 1
// function cpitalizeWords(str) {
// 	let words = str.split(" ").map((word) => {
// 		let first = word.slice(0, 1).toUpperCase();
// 		let rest = word.slice(1);
// 		return `${first}${rest}`;
// 	});
// 	return words.join(" ");
// }
// console.log(cpitalizeWords("i love javaScript"));
// console.log(cpitalizeWords("my name is caeser"));

////////////////

// /// solution 2
// function cpitalizeWords(str) {
// 	let words = str.split(" ").map((word) => {
// 		return word.charAt(0).toUpperCase() + word.slice(1);
// 	});
// 	return words.join(" ");
// }
// console.log(cpitalizeWords("i love javaScript"));
// console.log(cpitalizeWords("my name is caeser"));

/////////////////////////////
/////////////////////////////

///CHALLENGE 24
//return true onlyif all values are unique otherwise return false
/// using array , object, string method  lastIndexOf()
/// no set Data structure

//solution 1 using an array
// function unique(str) {
// 	let values = [];
// 	for (let letter of str) {
// 		if (values.indexOf(letter) !== -1) {
// 			return false;
// 		}
// 		values.push(letter);
// 	}
// 	return true;
// }

// console.log(unique("abcde"));
// //true
// console.log(unique("abacdefb"));
// //false

/////////////
// ///solution 2 using an object

// function unique(str) {
// 	let values = {};
// 	for (let letter of str) {
// 		if (values[letter]) {
// 			return false;
// 		}
// 		values[letter] = "exists";
// 	}
// 	return true;
// }

// console.log(unique("abcde"));
// //true
// console.log(unique("abacdefb"));
// //false
/////////////
///solution 3 using string method lastIndexOf()

// function unique(str) {
// 	for (let i = 0; i < str.length; i++) {
// 		if (str.lastIndexOf(str[i]) !== i) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// console.log(unique("abcde"));
// //true
// console.log(unique("abacdefb"));
// //false
/////////////////////////////////////////////
/////// CHALLENGE 25
// /// ARRAY SUM should be equal to the largest number

// function arraySum(arr) {
// 	let temArr = arr.sort((a, b) => {
// 		return a - b;
// 	});
// 	let largest = temArr.pop();
// 	let sum = 0;
// 	temArr.forEach((item) => (sum += item));
// 	return largest === sum;
// }

// console.log(arraySum([1, 2, 4, 6, 13]));
// // should return true 1+2+4+6 = 13
// console.log(arraySum([1, 2, 4, 34, 22]));
// // should return false 1+2+4+22 = 29  29! = 34

///////////////////////////////
/////// CHALLENGE 26  UNIQUE VALUES
///  find unique values by using Set() data structure
/// solutin 1
// function unique(str) {
// 	let tempStr = new Set();
// 	for (let letter of str) {
// 		if (tempStr.has(letter)) {
// 			return false;
// 		}
// 		tempStr.add(letter);
// 	}
// 	return true;
// }

// console.log(unique("abcde"));
// //true
// console.log(unique("abacdefb"));
// //false
//////////
/// solution 2
// function unique(str) {
// 	return new Set(str).size === str.length;
// }

// console.log(unique("abcde"));
// //true
// console.log(unique("abacdefb"));
// //false
///////////////////////////////////////////////////////////////
//// CHALLENGE 27
/// find unique object property values

// let products = [
// 	{
// 		title: "Iphone 8",
// 		company: "apple",
// 	},
// 	{
// 		title: "Galaxy",
// 		company: "samsong",
// 	},
// 	{
// 		title: "Iphone 7",
// 		company: "apple",
// 	},
// 	{
// 		title: "Iphone Xs",
// 		company: "apple",
// 	},
// 	{
// 		title: "HTC phone",
// 		company: "htc",
// 	},
// 	{
// 		title: "Galaxy HD",
// 		company: "samsong",
// 	},
// ];
// /////// solution 1

// // function getUnique(arr) {
// // 	let tempArr = arr.map((item) => item.company);
// // 	return [...new Set(tempArr)];
// // }
// // console.log(getUnique(products));
// /// solution 2
// function getUnique(arr) {
// 	return [
// 		...arr.reduce((acc, curr) => {
// 			acc.add(curr.company);
// 			return acc;
// 		}, new Set()),
// 	];
// }
// console.log(getUnique(products));

////////////////////////////////////////////////////
/// CHALLENGE 28
//return first word with the greatest number of repeated letters

// function countLetters(str) {
// 	let tempArr = str.split(" ");
// 	tempArr = tempArr.map((item) => {
// 		let tempItemArr = item.toLowerCase().split("");
// 		return tempItemArr.reduce(
// 			(acc, curr) => {
// 				acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
// 				if (acc[curr] > acc.max) {
// 					acc.max = acc[curr];
// 				}
// 				return acc;
// 			},
// 			{ max: 1, word: item }
// 		);
// 	});
// 	let amount = 1;
// 	let word = "";
// 	for (let item of tempArr) {
// 		if (item.max > amount) {
// 			amount = item.max;
// 			word = item.word;
// 		}
// 	}
// 	if (amount > 1) {
// 		return word;
// 	}

// 	return -1;
// }
// console.log(countLetters("Javascript is the greatest programming languageee"));

///////////////////////////////////////////////////////
// //////////// CHALLENGE 29
// //// sort the array and find the second item from right and from left.
// /// delete dublicate

// function secondValue(arr) {
// 	let values = [...new Set(arr)].sort((a, b) => a - b);
// 	if (values.length < 2) {
// 		return `${values[0]}`;
// 	} else if (values.length === 2) {
// 		return `${values[0]} ${values[1]}`;
// 	} else {
// 		return `${values[1]} ${values[values.length - 2]}`;
// 	}
// }

// console.log(secondValue([1]));
// //1
// console.log(secondValue([4, 2]));
// // 2 4
// console.log(secondValue([11, 44, 22]));
// //11,22,44 === 22 , 22
// console.log(secondValue([3, 2, 88, 3, -11, 67, 7]));
// // -11,2,3,7,67,88 === 2 , 67

//////////////////////////////////////////////////////
///////  CHALLENGE 30
/// return number with most repeat
/// if two numbers are repeated then repeat the first
/// if none repeated then return -1

// function testRepeat(arr) {
// 	let max = 1;
// 	let position = 0;
// 	let value = -1;
// 	let tempNumbers = arr.reduce((acc, curr, index) => {
// 		acc[curr] = acc[curr]
// 			? { ...acc[curr], amount: acc[curr]["amount"] + 1 }
// 			: { amount: 1, index };
// 		let amount = acc[curr].amount;
// 		let place = acc[curr].index;
// 		if (amount > max || (amount === max && place <= position && amount > 1)) {
// 			max = amount;
// 			value = curr;
// 			position = place;
// 		}
// 		return acc;
// 	}, {});
// 	return value;
// }

// console.log(testRepeat([5, 2, 2, 1, 5]));
// // return 5
// console.log(testRepeat([6, 5, 5, 10, 10, 10]));
// // return 10
// console.log(testRepeat([3, 4, 1, 6, 10]));
// // return -1;

/////////////////////////////////////////////////////////////
///// CHALLENGE 31
//prime number = can only be divided by itself or one.

/// solution 1
// function isPrime(num) {
// 	if (num < 2) {
// 		return false;
// 	}
// 	for (let i = 2; i < num; i++) {
// 		if (num % i === 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// console.log(isPrime(8));
// // false
// console.log(isPrime(11));
// // true
// console.log(isPrime(121));
// // false
// console.log(isPrime(127));
// // true
///////// solution 2 : faster for big numbers.

function isPrime(num) {
	if (num === 2) {
		return true;
	}
	if (num < 2) {
		return false;
	}

	let root = Math.ceil(Math.sqrt(num));

	for (let i = 2; i <= root; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(73));
console.log(isPrime(75));
console.log(isPrime(-1));
// // false
// console.log(isPrime(11));
// // true
// console.log(isPrime(121));
// // false
// console.log(isPrime(127));
// // true
////////////////////////////////////////////////
//// CHALLENGE 32
/// count repeating letters
// /// string will not contain numbers or sumbols..  only letters

// function countLetters(str) {
// 	let tempArr = str.split("");
// 	let letters = [];
// 	let count = 1;

// 	for (let i = 0; i < tempArr.length; i++) {
// 		if (tempArr[i] === tempArr[i + 1]) {
// 			count++;
// 		} else {
// 			let value = `${count}${tempArr[i]}`;
// 			letters = [...letters, value];
// 			count = 1;
// 		}
// 	}
// 	return letters.join("");
// }
// console.log(countLetters("ffffeerttttooo"));
// /// should return 4f2e1r4t3o

// //////////////////////////////////////////
// ///// chalange 33
// ///   RegEx palindrome
// function isPalindrom(str) {
// 	let tempStr = str
// 		.match(/[a-z0-9]+/gi)
// 		.join('')
// 		.toLowerCase();
// 	second = tempStr.split('').reverse().join('');
// 	return tempStr === second;
// }
// console.log(isPalindrom('race car'));
// ///true
// console.log(isPalindrom('caeser'));
// /// false
// console.log(isPalindrom('was it a- car? or, a- cat I saw'));
// /// true
/////////////////////////////////////

// const quarterOf = (month) => {
// 	let result = month / 3;
// 	if (result <= 1) {
// 		return 1;
// 	} else if (result <= 2) {
// 		return 2;
// 	} else if (result <= 3) {
// 		return 3;
// 	} else if (result <= 4) return 4;
// };

// console.log(quarterOf(5));
