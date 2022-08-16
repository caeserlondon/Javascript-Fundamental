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

// // challenge 5 reverse an integer
function reverseInt(int) {
	const revString = int.toString().split('').reverse().join('')
	return parseInt(revString) * Math.sign(int)
}

const output = reverseInt(-17893)

//////////////////////////////////////////////////

// CHALLENGE 6 :  LONGEST WORD
// RETURN THE LONGEST WORD OF A STRING
// if more than one the put into an Array

function longestWord(sen) {
	// create a filttered array
	const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)

	// sort by length
	const sorted = wordArr.sort((a, b) => b.length - a.length)

	// if multiple word put into array
	const longestWordArr = sorted.filter(
		(word) => word.length === sorted[0].length
	)

	// check if more than one word in the Array
	if (longestWordArr.length === 1) {
		// return the word
		return longestWordArr[0]
	} else {
		return longestWordArr
	}
}
const output = longestWord('Hello there, my name is Caeser')

console.log(output)
