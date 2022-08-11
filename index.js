// challenge 1   validate a palindrome and return true or false.

function isPalindrome(str) {
	const revString = str.split('').reverse().join('')
	return revString === str
}

//  call function
const output1 = isPalindrome('madam')
const output2 = isPalindrome('car')

console.log(output1)
console.log(output2)
