
function palindrome(str) {
  
  var replacedString = str.replace(/[\W_]/g, '');
  
  var lowCaseString = replacedString.toLowerCase();  
    
  var splitedArray = lowCaseString.split("");
  
  var reversedArray = splitedArray.reverse();
  
  var reversedString = reversedArray.join("");    
  
  return reversedString === lowCaseString;
  
}

palindrome("eye");
