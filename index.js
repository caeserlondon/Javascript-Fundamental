// // challenge 1   validate a palindrome and return true or false.

// function isPalindrome(str) {
// 	const revString = str.split('').reverse().join('')
// 	return revString === str
// }

// //  call function
// const output1 = isPalindrome('madam')
// const output2 = isPalindrome('car')

// console.log(output1)
// console.log(output2)

////////////////////////////////

////////////////////////

// challenge 2 fizzBuzz

// function fizzBuzz(num) {
// 	for (let i = 1; i <= num; i++) {
// 		if (i % 15 === 0) {
// 			console.log('FizzBuzz')
// 		} else if (i % 3 === 0) {
// 			console.log('Fizz')
// 		} else if (i % 5 === 0) {
// 			console.log('Buzz')
// 		} else {
// 			console.log(i)
// 		}
// 	}
// }

// const output = fizzBuzz(100)
// console.log(output)

////////////////////////////////////////////////////////////////

// // CHALLENGE 3
// /// LONGEST WORDS IN THE STRING
// // if there are more than one word return them in an array.

// function longestWords(str) {
// 	let words = str.split(' ')
// 	let size = 0
// 	let max = ['']

// 	for (let i = 0; i < words.length; i++) {
// 		if (words[i].length >= size) {
// 			size = words[i].length
// 			if (max[max.length - 1].length < words[i].length) {
// 				max = []
// 				max.push(words[i])
// 			} else {
// 				max = [...max, words[i]]
// 			}
// 		}
// 	}

// 	return [...max]
// }

// console.log(longestWords('I woke up early today'))
// console.log(longestWords('I love javascript'))

///////////////////////////////////////////////////////
/////// CHALLENGE 4
/// ARRAY SUM should be equal to the largest number

// function arraySum(arr) {
// 	let temArr = arr.sort((a, b) => {
// 		return a - b
// 	})
// 	let largest = temArr.pop()
// 	let sum = 0
// 	temArr.forEach((item) => (sum += item))
// 	return largest === sum
// }

// console.log(arraySum([1, 2, 4, 6, 13]))
// // should return true 1+2+4+6 = 13
// console.log(arraySum([1, 2, 4, 34, 22]))
// // should return false 1+2+4+22 = 29  29! = 34

///////////////////////////////////////////

// // // challenge 5 reverse an integer
// function reverseInt(int) {
// 	const revString = int.toString().split('').reverse().join('')
// 	return parseInt(revString) * Math.sign(int)
// }

// const output = reverseInt(-17893)

//////////////////////////////////////////////////

// // CHALLENGE 6 :  LONGEST WORD
// // RETURN THE LONGEST WORD OF A STRING
// // if more than one the put into an Array

// function longestWord(sen) {
// 	// create a filttered array
// 	const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)

// 	// sort by length
// 	const sorted = wordArr.sort((a, b) => b.length - a.length)

// 	// if multiple word put into array
// 	const longestWordArr = sorted.filter(
// 		(word) => word.length === sorted[0].length
// 	)

// 	// check if more than one word in the Array
// 	if (longestWordArr.length === 1) {
// 		// return the word
// 		return longestWordArr[0]
// 	} else {
// 		return longestWordArr
// 	}
// }
// const output = longestWord('Hello there, my name is Caeser')

// console.log(output)

///////////////////////////////////////

// // //CHALLENGE 7: ANAGRAM
// // / An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// // / For example, the word anagram itself can be rearranged into nag a ram, also the word binary into brainy and the word adobe into abode.
// // return true or false

// function isAnagram(str1, str2) {
// 	return formatStr(str1) === formatStr(str2)
// }

// // creating a helper function
// function formatStr(str) {
// 	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
// }

// const output = isAnagram('elbow', 'below#')
// console.log(output)

/////////////////////////////////////////////

// // CHALLENGE 8: LETTER CHANGE
// // CHANGE EVERY LETTER OF THE STRING TO THE ONE THAT FOLLOWS
// //  IT IN THE ALPHABET AND CAPITALIZE THE VOWELS
// //    z should turn to a
// //  ex. 'hello there' === 'Ifmmp UIfsf'

// function letterChange(str) {
// 	let newStr = str.toLowerCase().replace(/[a-z]/gi, function (char) {
// 		if (char === 'z') {
// 			return 'a'
// 		} else {
// 			return String.fromCharCode(char.charCodeAt() + 1)
// 		}
// 	})
// 	newStr = newStr.replace(/a|e|i|o|u/gi, function (vowel) {
// 		return vowel.toUpperCase()
// 	})
// 	return newStr
// }

// const output = letterChange('hello there')

// console.log(output)
//////////////////////////
// // const message = '@User_One @UserABC! Have you seen this from @Userxyz?'
// // const position = 1

// getRecipient = function (message, position) {
// 	// Your code goes here
// 	usersArray = message
// 		.split(' ')
// 		.filter((word) => word.includes('@'))
// 		.filter((word) => !word.includes('.'))

// 	// Regular expression to check if string is email
// 	const regexExp =
// 		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi

// 	usersArray.filter((users) => !regexExp.test(users))

// 	usersArray.map((user) =>
// 		user.replace(/[~`!#$%^&*()+={}\[\];:\'\"<>.,\/\\\?-]/g, '')
// 	)

// 	return usersArray
// }

// aa = getRecipient(
// 	'@User_One herh@erte.com @UserABC! Have you seen this from @Userxyz?',
// 	1
// )
// console.log(aa)

///////////////////////////////////////////

/// CHALLENGE 9  : ADD ALL NUMBERS
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
