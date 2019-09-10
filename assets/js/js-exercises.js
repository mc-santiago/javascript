// Palindrome

function palindrome() {
    let strPalindrome= document.getElementById("inputPalindrome").value;
    let textPalindrome;
    let lowerCaseStr= strPalindrome.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    let reverseStr= lowerCaseStr.split('').reverse().join('');
  
    if (lowerCaseStr === reverseStr) {
        textPalindrome= `Yes, ${strPalindrome} is a palindrome. Go ahead and try another.`;
        document.getElementById("inputPalindrome").value='';
    } else {
        textPalindrome= `No, ${strPalindrome} is not a palindrome. Better luck next time.`;
        document.getElementById("inputPalindrome").value='';
    }
    
    document.getElementById("solutionPalindrome").innerHTML= textPalindrome;
}

// Roman Numeral Converter

function convertToRoman() {
    let num= document.getElementById("inputRomanNumeral").value;
    let number= num;
    let roman='';
	let romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	let numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1]; 

	for (let i = 0; i < numbers.length; i++) {
		while (num >= numbers[i]) {
			roman += romanNumeral[i];
			num -= numbers[i];
		}
	}
    
    document.getElementById("inputRomanNumeral").value = '';
	document.getElementById("solutionRomanNumeral").innerHTML = `${roman} is the roman numeral of ${number}.`;
} 

// Caesars Cipher

function caesarsCipherDecode() {
    let coded = document.getElementById("inputCaesarsCipher").value;
    let encoded = '';

    for (let i=0; i < coded.length; i++) {
    let asciiNumber = coded[i].charCodeAt();
        if (asciiNumber >= 65 && asciiNumber <= 77) {
            encoded += String.fromCharCode(asciiNumber + 13);
        } else if (asciiNumber >= 78 && asciiNumber <= 90) {
            encoded += String.fromCharCode(asciiNumber - 13); 
        } else {
            encoded += coded[i];
        }
    }

    document.getElementById("solutionCaesarsCipher").innerHTML= `"${encoded}" is the decoded message of for "${coded}".`;
}

function caesarsCipherCode() {
    let encode = document.getElementById("inputCaesarsCipher").value;
    let code = '';

    for (let i=0; i < encode.length; i++) {
    let asciiNumber = encode[i].charCodeAt();
        if (asciiNumber >= 65 && asciiNumber <= 77) {
            code += String.fromCharCode(asciiNumber + 13);
        } else if (asciiNumber >= 78 && asciiNumber <= 90) {
            code += String.fromCharCode(asciiNumber - 13); 
        } else {
            code += encode[i];
        }
    }

    document.getElementById("inputCaesarsCipher").value = '';
    document.getElementById("solutionCaesarsCipher").innerHTML= `"${code}" is the coded message for "${encode}". Try another.`;
}

// Telephone Number Validator

function telephoneNumberValidator() {
    let strTNV = document.getElementById("inputTNV").value;
    let textTNV ="";
    let regex = /^(1\s)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   
   if (regex.test(strTNV) === true) {
    textTNV= `Yes, ${strTNV} is a valid US telephone number.`;
    document.getElementById("inputTNV").value='';
    } else {
    textTNV= `No, ${strTNV} is not a valid US number. Check for errors and try again.`;
    document.getElementById("inputTNV").value='';
    }

    document.getElementById("solutionTVN").innerHTML= textTNV;
 };