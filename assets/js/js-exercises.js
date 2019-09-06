// Palindrome

function palindrome() {
    let str= document.getElementById("palindromeInput").value;
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


