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
