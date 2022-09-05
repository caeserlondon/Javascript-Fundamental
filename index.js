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
