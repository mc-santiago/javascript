// Palindrome

function palindrome() {
    let str= document.getElementById("inputPalindrome").value;
    let text
    let lowerCaseStr= str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    let reverseStr= lowerCaseStr.split('').reverse().join('');
    if (lowerCaseStr === reverseStr) {
        text= `Yes, ${str} is a palindrome. Go ahead and try another.`
    } else {
        text= `No, ${str} is not a palindrome. Better luck next time.`;
    }
    document.getElementById("solutionPalindrome").innerHTML= text;
}

// Roman Numeral Converter

function convertToRoman() {
    let number= document.getElementById("inputRomanNumeral").value;
    let num= number;
    let roman='';
	let romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	let numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1]; 

	for (let i = 0; i < numbers.length; i++) {
		while (num >= numbers[i]) {
			roman += romanNumeral[i];
			num -= numbers[i];
		}
	}
		
	document.getElementById("solutionRomanNumeral").innerHTML= `${roman} is the roman numeral of ${number}.`;
} 
