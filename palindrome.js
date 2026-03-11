 //SCJJ 4578 TDSM4A
 function isPalindrome(num){
    let original=num;
    let reversed=0;

    while (num > 0) {
      let lastDigit = num % 10;
      reversed = (reversed * 10) + lastDigit;
      num = (num - lastDigit) / 10;
  }
   return original == reversed;
 }
   console.log(isPalindrome(123));
   console.log(isPalindrome(1221));     