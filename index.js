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

function fizzBuzz(num) {
	for (let i = 1; i <= num; i++) {
		if (i % 15 === 0) {
			console.log('FizzBuzz')
		} else if (i % 3 === 0) {
			console.log('Fizz')
		} else if (i % 5 === 0) {
			console.log('Buzz')
		} else {
			console.log(i)
		}
	}
}

const output = fizzBuzz(100)
console.log(output)
